import { useState } from 'react'
import { Popover } from '@headlessui/react'

import { FormBlank } from '../FormBlank';
import { WidgetForm } from '../WidgetForm'

export function Widget(props: any) {
  const [notPetSelected, setNotPetSelected] = useState(false);

  function handleSelectedPet() {
    setNotPetSelected(!notPetSelected);
  }

  return (
  <Popover className="flex items-end">
      <Popover.Panel 
        className="rounded-tl-lg shadow-[8px_2px_2px_8px_rgba(196,127,106,1)] 
        absolute bottom-0 right-0"
      >
        <Popover.Button 
          className="focus:outline-none absolute right-2 -top-[6.3rem]" 
          onClick={() => { if(notPetSelected) handleSelectedPet()}}
        >
          <img className="h-24" src="src/assets/widget.png" /> 
        </Popover.Button>
        
        {
          notPetSelected ?
          <WidgetForm /> : <FormBlank handleSelectedPet={handleSelectedPet} />
        }
      </Popover.Panel>

    <Popover.Button  className="focus:outline-none">
      <img className="h-24" src="src/assets/widget.png" /> 
    </Popover.Button>
  </Popover>
  )
}
