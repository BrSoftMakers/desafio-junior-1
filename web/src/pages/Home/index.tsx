import { useEffect, useState } from "react";

import { Pet } from "../../dtos";

import { api } from "../../config/api";

import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Widget } from "../../components/Widget";

export function Home(props: any) {
  const [pets, setPets] = useState<Pet[]>([]);
  const [page, setPage] = useState('1');
  const [totalPets, setTotalPets] = useState<number>(0);
  const pages = Math.ceil(totalPets / 4);
  const newPageArray = Array.from('p'.repeat(pages));

  useEffect(() => {
    api.get(`/pets?page=${page}`)
      .then((response: any) => {
        setPets(response.data.pets);
        setTotalPets(response.data.total);
      })
      .catch((error: any) => {
        console.log(error)
      })
  }, [page]);

  function handlePage(index: number) {
    let sum = index + 1;
    setPage(sum.toString());
  }

  return (
    <div className="flex h-screen w-screen justify-center bg-[#D8F6FF]">
      <div className="flex flex-col">
        <Header auth={props.auth}/>
        
        <div className="absolute bottom-0 right-0 items-end">
          <Widget />
        </div>

        <div className="flex flex-wrap overflow-y-auto w-screen justify-center">
          {
            pets.map((pet) => 
              <Card
                key={pet.id}
                pet={pet}
              />
            )
          }
        </div>
        
        <div className="flex overflow-x-auto justify-center items-end mt-5 p-4 mb-4 space-x-3">
          {
            newPageArray.map((pg, index) => 
              <button type="submit" onClick={() => handlePage(index)} className="bg-[#49B7E7] rounded-lg pr-4 pl-4 p-1">
                <strong className="text-white text-lg">{index + 1}</strong>
              </button> 
            )
          }
        </div>
      </div>
    </div>
  )
}