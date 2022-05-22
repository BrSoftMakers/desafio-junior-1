import { ChangeEventHandler, ReactEventHandler, useEffect, useState } from "react";
import axios from 'axios';

export function WidgetForm() {
  const [borderDog, setBorderDog] = useState(false);
  const [borderCat, setBorderCat] = useState(false);
  const [dogName, setDogName] = useState('');
  const [dogAge, setDogAge] = useState('');
  const [dogBreed, setDogBreed] = useState([]);
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhone, setOwnerPhone] = useState('');
  const [dogs, setDogs]:any = useState([]);

  async function selectDog() {
    setBorderDog(!borderDog);
    borderCat && setBorderCat(false);

    const dogss = await axios.get('https://dog.ceo/api/breeds/list');
    
    setDogs(dogss.data.message);

    if (borderDog) {
      setDogs([]);
    }
  }

  async function selectCat() {
    setBorderCat(!borderCat);
    borderDog && setBorderDog(false);

    const catss:any = await axios.get("https://api.thecatapi.com/v1/breeds");

    const opa = catss.data.map((cat: any) => cat.name);

    setDogs(opa);
    if(borderCat) {
      setDogs([]);
    }
  }

  async function handleSubmitForm() {
    await axios.post('http://localhost:3301/dogs', {
      "dog_name": dogName,
      "dog_age": 12,
      "dog_breed": "sting",
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
    <form onSubmit={handleSubmitForm} className="bg-gray-700 mb-4 rounded drop-shadow-sm h-max p-2 w-[calc(100vw-2rem)] md:w-max">
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
            className="w-full rounded h-8 p-2 focus:outline-none bg-zinc-700" placeholder="Nome do PET"
            type="text"
            autoCapitalize="words"
            onChange={event => setDogName(event.target.value)}
            required
          />
          <div className="flex flex-row space-x-4 my-4">
            <input
              className="w-full rounded h-8 p-2 focus:outline-none bg-zinc-700" placeholder="Idade"
              type="number"
              pattern="[A-Za-z]"
              onChange={event => setDogAge(event.target.value)}
              required
            />
            <select className="w-full rounded h-8 focus:outline-none bg-zinc-700" required>
              <option value="" selected>Raça...</option>
              {
                dogs.map((dog: any) => (
                  <option value={dog} key={dog}>{dog}</option>
                ))
              }
            </select>
          </div>
          <div className="flex flex-col">
            <input
              className="w-full h-8 p-2 focus:outline-none bg-zinc-700 mb-4" placeholder="Nome do dono"
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
              onChange={event => {
                setOwnerPhone(event.target.value)
                console.log(ownerPhone.length)
                
              }}
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