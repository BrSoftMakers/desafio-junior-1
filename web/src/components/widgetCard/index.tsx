import { useEffect, useState } from "react";
import { Trash } from "phosphor-react";

import { api } from '../../config/api';

interface Pet {
  id: string;
  pet_name: string;
  select_cat: boolean;
  select_dog: boolean;
  pet_age: number;
  pet_breed: string;
  owner_name: string;
  owner_phone: string;
}

interface IProps {
  pet: Pet
}

interface ICat {
  name: string;
}

export function WidgetCard(props: IProps) {
  const [borderDog, setBorderDog] = useState(props.pet.select_dog);
  const [borderCat, setBorderCat] = useState(props.pet.select_cat);
  const [petName, setPetName] = useState(props.pet.pet_name);
  const [petAge, setPetAge] = useState(props.pet.pet_age);
  const [petBreed, setPetBreed] = useState(props.pet.pet_breed);
  const [arrayPetBreeds, setArrayPetBreeds] = useState<string[]>([]);
  const [ownerName, setOwnerName] = useState(props.pet.owner_name);
  const [ownerPhone, setOwnerPhone] = useState(props.pet.owner_phone);
  let baseBreedURL: string;

  async function selectDog() {
    setBorderDog(!borderDog);
    borderCat && setBorderCat(false);

    const { data } = await api.get("https://dog.ceo/api/breeds/list");

    setArrayPetBreeds(data.message);

    if(borderDog) {
      setArrayPetBreeds([]);
    }
  }

  async function selectCat() {
    setBorderCat(!borderCat);
    borderDog && setBorderDog(false);

    const { data } = await api.get("https://api.thecatapi.com/v1/breeds");

    const catBreedNames = data.map((cat: ICat) => cat.name);

    setArrayPetBreeds(catBreedNames);

    if(borderCat) {
      setArrayPetBreeds([]);
    }
  }

  useEffect(() => {
    borderDog ?
    api.get("https://dog.ceo/api/breeds/list")
      .then(({ data }) => {
        setArrayPetBreeds(data.message);
      })
      .catch((err) => alert(err)) :
    api.get("https://api.thecatapi.com/v1/breeds")
      .then(({ data }) => {
        let catBreedNames = data.map((cat: ICat) => cat.name);
        
        setArrayPetBreeds(catBreedNames);
      })
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    if(ownerPhone.length === 2) {

      setOwnerPhone(`(${ownerPhone})`);
    }
    if(ownerPhone.length === 9) {
      setOwnerPhone(`${ownerPhone}-`);
    }
  }, [ownerPhone]);

  async function handleSubmit() {
    await api.put(`/pets/${props.pet.id}`, {
      "pet_name": petName,
      "select_cat": borderCat,
      "select_dog": borderDog,
      "pet_age": petAge,
      "pet_breed": petBreed,
      "owner_name": ownerName,
      "owner_phone": ownerPhone
    })
  }

  async function handleDeletePet() {
    await api.delete(`/pets/${props.pet.id}`);
  }

  return (
    <form onSubmit={handleSubmit} className="absolute mr-4 md:top-8 md:right-8 bg-gray-700 mb-4 rounded drop-shadow-sm h-max p-2">
      <div className="flex flex-row space-x-5 items-center justify-center mb-2">
        {
          borderDog ? 
          <button type="button" onClick={selectDog} className="p-4 border-2 border-[#3B82F6]">
            <img src='src/images/cachorro.png' width="80px" height="80px" />
          </button> : 
          <button type="button" onClick={selectDog} className="p-4">
            <img src='src/images/cachorro.png' width="80px" height="80px" />
          </button>
        }
        {
          borderCat ?
          <button type="button" onClick={selectCat} className="p-4 border-2 border-[#3B82F6]">
            <img src="src/images/gato.png" width="80px" height="80px" />
          </button> :
          <button type="button" onClick={selectCat} className="p-4">
            <img src="src/images/gato.png" width="80px" height="80px" />
          </button>
        }    
             
      </div>

      <div className="flex flex-col">
          <input
            value={petName}
            onChange={event => setPetName(event.target.value)}
            className="w-full rounded h-8 p-2 focus:outline-none bg-zinc-700" placeholder="Nome do PET"
            required
          />
          
          <div className="flex flex-row space-x-4 my-4">
            <input
              value={petAge}
              onChange={event => setPetAge(parseInt(event.target.value || '0'))}
              className="w-full rounded h-8 p-2 focus:outline-none bg-zinc-700" placeholder="Idade"
              required
            />
            
            <select 
              className="w-full rounded h-8 focus:outline-none bg-zinc-700"
              onChange={event => setPetBreed(event.target.value)}
              required
            >
              {
                arrayPetBreeds.map((pet_breed) => {
                  if (pet_breed === petBreed) {
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
          </div>
          <div className="flex flex-col">
            <input 
              value={ownerName}
              onChange={event => setOwnerName(event.target.value)}
              className="w-full h-8 p-2 focus:outline-none bg-zinc-700 mb-4" placeholder="Nome do dono"
              required
            />
            <input 
              value={ownerPhone}
              onChange={event => setOwnerPhone(event.target.value)}
              className="w-full h-8 p-2 focus:outline-none bg-zinc-700"
              placeholder="Tel: (81)99999-9999"
              type="tel"
              pattern="\([1-9]{1}[0-9]{1}\)9[1-9]{1}[0-9]{3}-[0-9]{4}"
              maxLength={14}
              required
            />
          </div>

          <div className="flex justify-center my-4 mb-2">
            <button type="submit" className="w-28 h-8 bg-[#3B82F6] rounded">
              <span className="font-bold">Salvar</span>
            </button>
          </div>

          <div className="absolute -bottom-5 right-4">
            <button onClick={handleDeletePet} type="submit" className="p-2 bg-gray-300 rounded-full" title="Excluir">
              <Trash size={32} color="#d82013" weight="fill" />
            </button>
          </div>
      </div>
  </form>      
  )
}