import { ChangeEventHandler, ReactEventHandler, useEffect, useState } from "react";

import { api } from "../../config/api";

interface ICat {
  name: string;
}

export function WidgetForm() {
  const [borderDog, setBorderDog] = useState(false);
  const [borderCat, setBorderCat] = useState(false);
  const [petName, setPetName] = useState('');
  const [petAge, setPetAge] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [arrayPetBreeds, setArrayPetBreeds] = useState<string[]>([]);
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');

  async function selectDog() {
    setBorderDog(!borderDog);
    borderCat && setBorderCat(false);

    const { data } = await api.get('https://dog.ceo/api/breeds/list');
    
    setArrayPetBreeds(data.message);

    if (borderDog) {
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

  async function handleSubmitForm() {
    await api.post('/pets', {
      "select_cat": borderCat,
      "select_dog": borderDog,
      "pet_name": petName,
      "pet_age": petAge,
      "pet_breed": petBreed,
      "owner_name": ownerName,
      "owner_phone": ownerPhone
    });
  }

  useEffect(() => {
    if(ownerPhone.length === 2) {

      setOwnerPhone(`(${ownerPhone})`);
    }
    if(ownerPhone.length === 9) {
      setOwnerPhone(`${ownerPhone}-`);
    }
  }, [ownerPhone]);
  

  return (
    <form 
      onSubmit={handleSubmitForm} 
      className="bg-gray-700 mb-4 rounded drop-shadow-sm h-max p-2 w-[calc(100vw-2rem)] md:w-max"
    >
      <div 
        className="flex flex-row space-x-5 items-center justify-center mb-2"
      >
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
            className="w-full rounded h-8 p-2 focus:outline-none bg-zinc-700" 
            placeholder="Nome do PET"
            type="text"
            autoCapitalize="words"
            onChange={event => setPetName(event.target.value)}
            required
          />
          <div className="flex flex-row space-x-4 my-4">
            <input
              className="w-full rounded h-8 p-2 focus:outline-none bg-zinc-700" 
              placeholder="Idade"
              type="number"
              pattern="[A-Za-z]"
              onChange={event => setPetAge(event.target.value)}
              required
            />
            <select 
              className="w-full rounded h-8 focus:outline-none bg-zinc-700"
              onChange={event => setPetBreed(event.target.value)}
              required
            >
              <option value="" selected>Raça...</option>
              {
                arrayPetBreeds.map((pet) => (
                  <option value={pet} key={pet}>{pet}</option>
                ))
              }
            </select>
          </div>
          <div className="flex flex-col">
            <input
              className="w-full h-8 p-2 focus:outline-none bg-zinc-700 mb-4" 
              placeholder="Nome do dono"
              type="text"
              onChange={event => setOwnerName(event.target.value)}
              required
            />
            <input
              className="w-full h-8 p-2 focus:outline-none bg-zinc-700" 
              placeholder="Tel: (81)99999-9999"
              type="tel"
              pattern="\([1-9]{1}[0-9]{1}\)9[1-9]{1}[0-9]{3}-[0-9]{4}"
              maxLength={14}
              value={ownerPhone}
              onChange={event => setOwnerPhone(event.target.value)}
              required
            />
          </div>

          <div className="flex justify-center my-4 mb-2">
            <button type="submit" className="w-28 h-8 bg-[#3B82F6] rounded">
              <span className="font-bold">Cadastrar</span>
            </button>
          </div>
      </div>
  </form>      
  )
}