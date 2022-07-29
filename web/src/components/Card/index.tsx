import { useState } from "react"
import { Popover } from "@headlessui/react"

import { IPropsCard } from "../../dtos"

import { CardForm } from "../CardForm"
import { FormBlank } from "../FormBlank"

export function Card({ pet }: IPropsCard) {
  const [notPetSelected, setNotPetSelected] = useState(false);

  function handleSelectedPet() {
    setNotPetSelected(!notPetSelected);
  }

  return (
    <Popover>
      <Popover.Panel
        className="rounded-tl-lg shadow-[8px_2px_2px_8px_rgba(196,127,106,1)] 
        absolute bottom-0 right-0 focus:outline-none"
      >  
        <Popover.Button 
          className="focus:outline-none absolute right-2 -top-[6.3rem]"
          onClick={() => { if(notPetSelected) handleSelectedPet()}}
        >
          <img className="h-24" src="src/assets/widget.png" /> 
        </Popover.Button>
        
        {
          notPetSelected ?
          <CardForm pet={pet}/> : <FormBlank handleSelectedPet={handleSelectedPet} />
        }
      </Popover.Panel>

      <div className="flex flex-col m-4 items-center focus:outline-none">
      
        <Popover.Button
          className="bg-white flex flex-col w-52 justify-center 
          items-center p-2 pb-8 rounded-2xl mt-12 shadow-lg focus:outline-none 
          focus:border-l-2 focus:border-b-2 focus:border-r-2 focus:border-t-2 
          focus:border-[#4CFDB3]"
          onClick={() => setNotPetSelected(true)}
        >
          <div className="bg-white p-4 rounded-full -mt-16 w-24 shadow-lg">
            {
              pet.type === "cao" ?
              <img src="src/assets/cao.png"/> :
              <img src="src/assets/gato.png" />
            }
          </div>
          
          <div className="pt-3 pb-2">
            <span>{pet.name}</span>
          </div>
          <hr className="flex w-full border-t-1 border-y-stone-400 border-dashed mb-4"/>

          <div className="flex space-x-10">
          <div className="flex flex-col">
            <strong className="mb-2">Raça</strong>
            <strong>Idade</strong>
          </div> 
          
          <div className="flex flex-col">
            <span className="pt-1 mb-4 text-xs">{pet.breed}</span>
            <span className="text-xs">{pet.age} {pet.age === 1 ? "mês" : "meses"}</span>
          </div>
          </div>
          </Popover.Button>    
      </div>
    </Popover>  
  )
}