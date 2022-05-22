import { useEffect, useState } from "react";
import { CardComponent } from "../card";

import axios from 'axios';

interface Pet {
  id: string;
  dog_name: string;
  dog_age: number;
  dog_breed: string;
  owner_name: string;
  owner_phone: string;
}

export function List() {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3301/dogs')
    .then(response => {
      setPets(response.data);
    })
    .catch();
  }, );

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