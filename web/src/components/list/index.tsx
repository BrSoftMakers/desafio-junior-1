import { useEffect, useState } from "react";
import axios from 'axios';

import { api } from "../../config/api";
import { CardComponent } from "../Card";


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

export function List() {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    api.get('/pets')
      .then(({ data }) => {
        setPets(data);
      })
      .catch((err) => alert(err));
  }, []);

  return (
    <>
      <div className="flex w-full h-full flex-wrap justify-center">
        {pets.map(pet => (
          <CardComponent pet={pet} key={pet.id}/>
        ))}
      </div>
    </>
  )
}