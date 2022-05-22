import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { WidgetCard } from "../widgetCard";

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

export function CardComponent(props: IProps) {
  return (
    <Popover>
      <Popover.Panel>
        <WidgetCard pet={props.pet}/>
      </Popover.Panel>
      <Popover.Button className="bg-gray-700 p-2 w-80 rounded m-3 h-26">
        <div className="flex flex-row space-x-4">
          <div className="bg-slate-50 rounded-full p-2">
            <img src="src/images/cachorro.png" width="80px" height="80px" />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex space-x-4 justify-center">
              <span className="font-bold">{props.pet.dog_name}</span>
              <span className="font-bold">{props.pet.dog_age}</span>
              <span className="font-bold">{props.pet.dog_breed}</span>
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