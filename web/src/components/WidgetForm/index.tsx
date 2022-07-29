import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../config/api";
import { ICat, ICEPResponse, IPropsWidgetForm } from "../../dtos";

export function WidgetForm({ pet }: IPropsWidgetForm) {
  const [petName, setPetName] = useState('');
  const [breed, setBreed] = useState('');
  const [type, setType] = useState('');
  const [age, setAge] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [complement, setComplement] = useState('');
  const [district, setDistrict] = useState('');
  const [address, setAddress] = useState('');

  const [buttonRegisterColor, setButtonRegisterColor] = useState(false);

  const [dogSelected, setDogSelected] = useState(false);
  const [catSelected, setCatSelected] = useState(false);
  const [arrayPetBreeds, setArrayPetBreeds] = useState<string[]>([]);

  useEffect(() => {
    cep?.length === 8 ? setButtonRegisterColor(false) : setButtonRegisterColor(true);

    if (cep.length === 8 ) {
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

  async function handleRegister() {
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

    const response = await api.post('/owners', dataOwner);

    const dataPet = {
      name: petName,
      breed,
      type,
      age,
      ownerId: response.data
    }

    await api.post(`/pets`, dataPet)
    window.location.reload();
  }

  return (
    <form 
      className="bg-white rounded-tl-lg h-max p-1 sm:w-[calc(100vw-2rem)] md:w-max"
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
            <option value="" selected>Raça...</option>
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
            onChange={(e) => setAge(e.target.value)}
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
          <button className="p-2 bg-[#BCBCBC] rounded-lg">
            <strong>Cadastrar</strong>
          </button> :
          <button type="button" onClick={handleRegister} className="p-2 bg-[#49B7E7] rounded-lg">
            <strong className="text-white">Cadastrar</strong>
          </button>
          
        }
      </div>
    </form>
  )
}
