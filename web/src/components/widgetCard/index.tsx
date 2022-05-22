import { useState } from "react";
import axios from 'axios';
import { Trash } from "phosphor-react";

interface Pet {
  id: string;
  dog_name: string;
  dog_age: number;
  dog_breed: string;
  owner_name: string;
  owner_phone: string;
}

interface IProps {
  pet: Pet
}

export function WidgetCard(props: IProps) {
  const [borderDog, setBorderDog] = useState(false);
  const [borderCat, setBorderCat] = useState(false);
  const [dogName, setDogName] = useState(props.pet.dog_name);
  const [dogAge, setDogAge] = useState(props.pet.dog_age);
  const [dogBreed, setDogBreed] = useState([]);
  const [ownerName, setOwnerName] = useState(props.pet.owner_name);
  const [ownerPhone, setOwnerPhone] = useState(props.pet.owner_phone);

  function selectDog() {
    setBorderDog(!borderDog);
    borderCat && setBorderCat(false);
  }

  function selectCat() {
    setBorderCat(!borderCat);
    borderDog && setBorderDog(false);
  }

  async function handleSubmit() {
    await axios.put(`http://localhost:3301/dogs/${props.pet.id}`, {
      "dog_name": dogName,
      "dog_age": 12,
      "dog_breed": "sting",
      "owner_name": ownerName,
      "owner_phone": ownerPhone
    })
  }

  return (
    <form onSubmit={handleSubmit} className="absolute top-8 right-8 bg-gray-700 mb-4 rounded drop-shadow-sm h-max p-2">
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
          value={dogName}
          onChange={event => setDogName(event.target.value)}
          className="w-full rounded h-8 p-2 focus:outline-none bg-zinc-700" placeholder="Nome do PET"/>
          <div className="flex flex-row space-x-4 my-4">
            <input
            value={props.pet.dog_age}
            className="w-full rounded h-8 p-2 focus:outline-none bg-zinc-700" placeholder="Idade"/>
            <select className="w-full rounded h-8 p-2 focus:outline-none bg-zinc-700" placeholder="Raça"/>
          </div>
          <div className="flex flex-col">
            <input 
            value={ownerName}
            onChange={event => setOwnerName(event.target.value)}
            className="w-full h-8 p-2 focus:outline-none bg-zinc-700 mb-4" placeholder="Nome do dono"/>
            <input 
            value={props.pet.owner_phone}
            className="w-full h-8 p-2 focus:outline-none bg-zinc-700" placeholder="Tel: (11) 1 1111-1111"/>
          </div>

          <div className="flex justify-center my-4 mb-2">
            <button type="submit" className="w-28 h-8 bg-[#3B82F6] rounded">
              <span className="font-bold">Salvar</span>
            </button>
          </div>

          <div className="absolute -bottom-5 right-4">
            <button type="button" className="p-2 bg-gray-300 rounded-full" title="Excluir">
              <Trash size={32} color="#d82013" weight="fill" />
            </button>
          </div>
      </div>
  </form>      
  )
}