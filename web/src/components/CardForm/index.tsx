import { useEffect, useState } from "react";
import axios from "axios";

import { api } from "../../config/api";

import { ICat, ICEPResponse, IPropsWidgetForm } from "../../dtos";

export function CardForm({ pet }: IPropsWidgetForm) {
  const [petName, setPetName] = useState(pet?.name);
  const [breed, setBreed] = useState(pet?.breed);
  const [type, setType] = useState(pet?.type);
  const [age, setAge] = useState(pet?.age);
  const [ownerName, setOwnerName] = useState(pet?.Owner.name);
  const [phone, setPhone] = useState(pet?.Owner.phone);
  const [cep, setCep] = useState(pet?.Owner.zip_code);
  const [city, setCity] = useState(pet?.Owner.city);
  const [uf, setUf] = useState(pet?.Owner.uf);
  const [complement, setComplement] = useState(pet?.Owner.complement);
  const [district, setDistrict] = useState(pet?.Owner.district);
  const [address, setAddress] = useState(pet?.Owner.address);

  const [buttonRegisterColor, setButtonRegisterColor] = useState(false);

  const [dogSelected, setDogSelected] = useState(false);
  const [catSelected, setCatSelected] = useState(false);
  const [arrayPetBreeds, setArrayPetBreeds] = useState<string[]>([]);

  useEffect(() => {
    if (
      petName !== pet?.name || breed !== pet?.breed || type !== pet?.type ||
      age !== pet?.age || ownerName !== pet?.Owner.name || phone !== pet?.Owner.phone ||
      cep !== pet?.Owner.zip_code || city !== pet?.Owner.city || uf !== pet?.Owner.uf ||
      complement !== pet?.Owner.complement || district !== pet?.Owner.district ||
      address !== pet?.Owner.address
    ) {
      setButtonRegisterColor(true);
    }
  }, [cep,petName,breed,type,age,ownerName,phone,city,uf,complement,district,address]);

  useEffect(() => {
    cep?.length === 8 ? setButtonRegisterColor(false) : setButtonRegisterColor(true);

    if (cep?.length === 8 ) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          const data: ICEPResponse = response.data;

          setAddress(data.logradouro);
          setCity(data.localidade);
          setDistrict(data.bairro)
          setUf(data.uf);
        })
    }
  }, [cep]);

  useEffect(() => {
    if (pet?.type === "cao") {
      setDogSelected(true);

      axios.get("https://dog.ceo/api/breeds/list")
        .then((response) => {
          setArrayPetBreeds(response.data.message);
        })
    }
    else {
      setCatSelected(true)
      axios.get("https://api.thecatapi.com/v1/breeds")
        .then((response) => {
          const catBreedNames = response.data.map((cat: ICat) => cat.name);

          setArrayPetBreeds(catBreedNames);
        })
    }
  }, []);

  useEffect(() => {
    if(phone?.length === 2) {

      setPhone(`(${phone})`);
    }
    
    if(phone?.length === 9) {
      setPhone(`${phone}-`);
    }
  }, [phone]);
  

  function selectTypePet(type: string) {
    if (type === "dog") {
      setDogSelected(!dogSelected) 
      setCatSelected(false)
      setType("cao");

      axios.get("https://dog.ceo/api/breeds/list")
        .then((response) => {
          setArrayPetBreeds(response.data.message);
        })
    } else {
      setCatSelected(!catSelected);
      setDogSelected(false);
      setType("gato")

      axios.get("https://api.thecatapi.com/v1/breeds")
      .then((response) => {
        const catBreedNames = response.data.map((cat: ICat) => cat.name);

        setArrayPetBreeds(catBreedNames);
      })
    }
  }

  async function handleUpdate() {
    const dataPet = {
      name: petName,
      breed,
      type,
      age
    }

    const dataOwner = {
      name: ownerName,
      phone,
      zip_code: cep,
      complement,
      city,
      district,
      address,
      uf
    }

    await api.put(`/pets/${pet?.id}`, dataPet)
    await api.put(`/owners/${pet?.ownerId}`, dataOwner)
  }

  async function handleDelete() {
    await api.delete(`/pets/${pet?.id}`);
    window.location.reload();
  }

  return (
    <form 
      className="bg-white rounded-tl-lg h-max p-1 sm:w-[calc(100vw-2rem)] md:w-max"
      onSubmit={handleUpdate}
    >
      <div className="flex justify-between space-x-12 items-center pr-6 pl-6 p-2">
        <div className="bg-gray-900 rounded-full p-8">
        </div>
        <div className="flex flex-col items-end">
          <strong>Leandro R. Ferreira</strong>
          <span>Funcionário</span>
        </div>
      </div>
      <hr className="border-t-1 border-dashed border-y-stone-300 mt-1 mb-3"/>
      <div className="flex justify-center space-x-12">
        {
          catSelected ?
          <button 
            type="button" 
            className="outline outline-2 rounded-full p-2 outline-[#4CFDB3]"
            onClick={() => selectTypePet("cat")}
          >
            <img src="src/assets/gato.png" />
          </button> :
          <button 
            type="button" 
            className="rounded-full p-2"
            onClick={() => selectTypePet("cat")}
          >
            <img src="src/assets/gato.png" />
          </button>
        }
        {
          dogSelected ?
          <button 
            type="button" 
            className="outline outline-2 rounded-full p-2 outline-[#4CFDB3]"
            onClick={() => selectTypePet("dog")}
          >
            <img src="src/assets/cao.png" />
          </button> :
          <button 
            type="button" 
            className="rounded-full p-2"
            onClick={() => selectTypePet("dog")}
          >
            <img src="src/assets/cao.png" />
          </button>
        }
      </div>

      <div className="flex flex-col mt-4">
        <input 
          placeholder="Nome do Pet"
          className="focus:outline-none p-1 bg-[#F2F2F2] rounded"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          required
        />

        <div className="flex mt-2 justify-between">
          <select 
            className="w-44 focus:outline-none outline-none bg-[#F2F2F2] mb-2"
            onChange={(e) => setBreed(e.target.value)}
            required
          >
            {
              arrayPetBreeds.map((pet_breed) => {
                if (pet_breed === pet?.breed) {
                  return (
                    <option value={pet_breed} key={pet_breed}>{pet_breed}</option>
                  )
                }
              }
              ) 
            }
            {
              arrayPetBreeds.map((pet_breed) => (
                <option value={pet_breed} key={pet_breed}>{pet_breed}</option>
              ))
            } 
          </select>
          <input 
            placeholder="Idade"
            className="focus:outline-none p-1 bg-[#F2F2F2] rounded w-44 mb-2"
            value={age}
            type="number"
            onChange={(e) => setAge(Number(e.target.value))}
            required
          />
        </div>
        
        <input 
          placeholder="Nome do Dono"
          className="focus:outline-none p-1 bg-[#F2F2F2] rounded mb-2"
          onChange={(e) => setOwnerName(e.target.value)}
          value={ownerName}
          required
        />

        <div className="flex justify-between space-x-2">
          <input 
            placeholder="(99) 9 9999-9999"
            className="focus:outline-none p-1 bg-[#F2F2F2] rounded w-44 mb-2"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />

          <input 
            placeholder="CEP"
            className="focus:outline-none p-1 bg-[#F2F2F2] rounded mb-2 w-44"
            onChange={(e) => setCep(e.target.value)}
            value={cep}
            required
          />
        </div>
        

        <div className="flex justify-between space-x-2">
          <input 
            placeholder="Cidade"
            className="focus:outline-none p-1 bg-[#F2F2F2] rounded mb-2 w-44"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={true}
            required
          />

          <input 
            placeholder="UF"
            className="focus:outline-none p-1 bg-[#F2F2F2] rounded mb-2 w-44"
            value={uf}
            onChange={(e) => setUf(e.target.value)}
            disabled={true}
            required
          />
        </div>

        <div className="flex justify-between space-x-2">
          <input 
            placeholder="Complemento"
            className="focus:outline-none p-1 bg-[#F2F2F2] rounded mb-2 w-44"
            value={complement}
            onChange={(e) => setComplement(e.target.value)}
          />

          <input 
            placeholder="Bairro"
            className="focus:outline-none p-1 bg-[#F2F2F2] rounded mb-2 w-44"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            required
            disabled={true}
          />
        </div>

        <input 
            placeholder="Endereço"
            className="focus:outline-none p-1 bg-[#F2F2F2] rounded"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            disabled={true}
        />
      </div>

      <div className="flex justify-center p-2">
        {
          buttonRegisterColor ?
          <button type="submit" className="p-2 bg-[#49B7E7] rounded-lg">
            <strong className="text-white">Atualizar</strong>
          </button> :
          <button className="p-2 bg-[#BCBCBC] rounded-lg">
            <strong>Atualizar</strong>
          </button>
          
        }

        <button type="button" onClick={handleDelete} className="bg-red-500 rounded-lg p-3 ml-3">
          <strong>Excluir</strong>
        </button>
      </div>
    </form>
  )
}
