import { useState } from "react";
import { Popover } from "@headlessui/react";
import { WidgetCard } from "../WidgetCard";

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

export function CardComponent(props: IProps) {
  function monthsToYears(age: number): string {
    if(age <= 12) {
      return `${props.pet.pet_age} months`
    }

    const ageRounded = Math.round(props.pet.pet_age / 12);  

    return `${ageRounded} Year`;
  }

  return (
    <Popover>

      <Popover.Panel>
        <WidgetCard pet={props.pet}/>
      </Popover.Panel>

      <Popover.Button className="bg-gray-700 p-2 w-80 rounded m-3 h-26">
        <div className="flex flex-row space-x-4">
          <div className="bg-slate-50 rounded-full p-2">
            { props.pet.select_dog ?
              <img src="src/images/cachorro.png" width="80px" height="80px" /> :
              <img src="src/images/gato.png" width="68px" height="68px" />
            }
          </div>
          <div className="flex flex-col w-full">
            <div className="flex space-x-4 justify-center">
              <span className="font-bold">{props.pet.pet_name}</span>
              <span className="font-bold">{monthsToYears(props.pet.pet_age)}</span>
              <span className="font-bold">{props.pet.pet_breed}</span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold">{props.pet.owner_name}</span>
              <span className="font-bold">{props.pet.owner_phone}</span>
            </div>
          </div>
        </div>
      </Popover.Button>

    </Popover>
  )
}