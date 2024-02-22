"use client"

import Image from "next/image";
import { useState } from "react";
import petIcon from '@/app/assets/petIcon.svg';
import setaModal from '@/app/assets/seta-modal.svg';
import nameDono from '@/app/assets/nameDono.svg';
import namePet from '@/app/assets/namePet.svg';
import editeIcon from '@/app/assets/editeIcon.svg';
import removeIcon from '@/app/assets/removeIcon.svg';


const CardPet = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickModal = () => {
    setModalOpen(!modalOpen);
  }

  return (
    <span className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 pr-4">

      <span className={`flex my-1 rounded-md border-2 p-2 w-full justify-around items-center bg-gradient-to-r from-blue-950 to-slate-900 ${modalOpen ? 'border-blue-500 bg-blue-500' : "border-transparent"} hover:border-blue-500 hover:bg-blue-500`}>
        <Image src={petIcon} alt="pet-icon" className="size-16"/>
        <div>
          <p className="flex gap-2">
            <Image src={namePet} alt="name-pet" />
            Simba Farias
          </p>

          <p className="flex gap-2">
            <Image src={nameDono} alt="name-dono" />
            Emanuel Farias
          </p>
        </div>
        <button onClick={handleClickModal}>
          <Image src={setaModal} alt="modal-open" />
        </button>
      </span>
      { modalOpen && (
        <div className="absolute p-2 mt-2 w-auto h-auto bg-gradient-to-r from-blue-950 to-slate-900 border-blue-500 border-2 rounded-md">
          <p>Raça: dog</p>
          <p>telefone: 129192912</p>
          <p>idade: 2 anos (19/12/1998)</p>
          <button className="flex gap-2 bg-white bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            <Image src={editeIcon} alt="edite-icon" className="size-4"/>
            Editar
          </button>
          <button className="flex gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md p-1 items-center">
            <Image src={removeIcon} alt="remove-icon" className="size-4"
            />Remover
          </button>
        </div>
      )
      }
    
    </span>
  );
}

export default CardPet;

//gap-2 bg-gradient-to-r
//            from-indigo-500
//            to-blue-500 rounded-md p-3