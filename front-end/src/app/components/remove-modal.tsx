"use client"

import Image from "next/image";
import closeIcon from "@/app/assets/closeIcon.svg"
import removeIcon2 from "@/app/assets/removeIcon2.svg"
import namePet from "@/app/assets/namePet.svg"
import nameDono from "@/app/assets/nameDono.svg"
import ageIcon from "@/app/assets/ageIcon.svg"
import phoneIcon from "@/app/assets/phoneIcon.svg"
import dateIcon from "@/app/assets/dateIcon.svg"
import removeIcon from "@/app/assets/removeIcon.svg"
import backIcon from "@/app/assets/backIcon.svg"

import { useState } from "react";
import { toast } from 'sonner';
import { IDeleteClient } from "../types/IClients";
import { deleteClient } from "@/util/endypoints";

type StyleRadio = "dog" | "cat"

interface IProps {
  openClosed: () => void;
  client: IDeleteClient;
}

const RemoveModal = ({ openClosed, client }: IProps) => {
  const [selectedOption, setSelectedOption] = useState<StyleRadio>();

  const handleClickDelete = async () => {
    deleteClient(client.id, client.ownerId)
    toast.success('Cliente removido com sucesso.')
    openClosed()
  }

  return (
    <dialog
    style={{
      background: "linear-gradient(80deg, rgba(0, 30, 77, 1) 20%, rgba(0, 8, 20, 1) 100%)",
    }}
      className="rounded-md fixed inset-0 flex items-center justify-center overflow-auto border-2 border-blue-500"
      open
    >
      <div className="p-1 rounded-lg overflow-hidden shadow-xl h-auto w-auto">
        <div className="m-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={removeIcon2} className="w-12 h-12 md:w-16 md:h-16" alt="remove" />
            <h1 className="text-slate-50 text-lg md:text-xl font-bold">Remover</h1>
          </div>
          <button onClick={openClosed}>
            <Image src={closeIcon} alt="close" />
          </button>
        </div>

        <form className="p-4 md:p-8">
          <div className="flex flex-col m-3 md:mx-5 gap-3 items-start">
            <div className="flex flex-col items-center md:flex-row gap-3">
              <label htmlFor="name" className="flex flex-col items-start gap-2 text-base text-slate-50">
                <span className="flex gap-2 ">
                  <Image src={namePet} alt="name-pet" className="w-5 h-5 md:w-6 md:h-6" />
                  Nome
                </span>
                <p className="w-full md:w-64 h-10 border-2 rounded-md p-2 border-slate-500 bg-slate-600">{client.name}</p>
              </label>

              <div className="flex flex-col gap-2">
                <p className="flex text-base gap-2 text-slate-50">
                  <Image src={ageIcon} alt="name-dono" className="w-5 h-5 md:w-6 md:h-6"/>
                  Animal
                </p>
                <div className="flex gap-3">
                  <label htmlFor="dog" className={`flex justify-center text-base text-slate-50 gap-2 border-2 p-1 rounded-md ${selectedOption === 'cat' ? 'border-slate-500' : 'border-slate-50'}`}>
                    Cachorro
                    <input className="mx-2" type="radio" name="option" id="dog" onChange={() => setSelectedOption('dog')} />
                  </label>

                  <label htmlFor="cat" className={`flex items-center justify-around text-base text-slate-50 gap-2 border-2 p-1 rounded-md ${selectedOption === 'dog' ? 'border-slate-500' : 'border-slate-50'}`}>
                    Gato
                    <input className="mx-2" type="radio" name="option" id="cat" onChange={() => setSelectedOption('cat')} />
                  </label>
                </div>
              </div>

            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <label htmlFor="dono" className="flex flex-col items-start gap-2 text-base text-slate-50">
                <div className="flex gap-2 "><Image src={nameDono} alt="name-pet" className="w-5 h-5 md:w-6 md:h-6" />
                Dono</div>
                <p className="w-full md:w-64 h-10 border-2 rounded-md p-2 border-slate-500 bg-slate-600">{client.owner}</p>
              </label>

              <label htmlFor="Raca" className="flex flex-col items-start gap-2 text-base text-slate-50">
                <div className="flex gap-2 "><Image src={ageIcon} alt="name-pet" className="w-5 h-5 md:w-6 md:h-6" />
                Raça</div>
                <p className="w-full md:w-64 h-10 border-2 rounded-md p-2 border-slate-500 bg-slate-600">{client.animal}</p>
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <label htmlFor="phone" className="flex flex-col items-start gap-2 text-base text-slate-50">
                <div className="flex gap-2 ">
                  <Image src={phoneIcon} alt="name-pet" className="w-5 h-5 md:w-6 md:h-6" />
                  Telefone
                </div>
                <p className="w-full md:w-64 h-10 border-2 rounded-md p-2 border-slate-500 bg-slate-600" >{client.ownerPhone}</p>
              </label>

              <label htmlFor="phone" className="flex flex-col items-start gap-2 text-base text-slate-50">
                <div className="flex gap-2 ">
                  <Image src={dateIcon} alt="name-pet" className="w-5 h-5 md:w-6 md:h-6" />
                    Nascimento
                    <span className="font-bold text-slate-500">(Aproximado)</span>
                </div>
                <p className="w-full md:w-64 h-10 border-2 rounded-md p-2 border-slate-500 bg-slate-600" >{client.nascimento}</p>
              </label>
            </div>

            <p className="text-slate-50 font-bold my-2">Tem certeza que deseja remover esse pet?</p>

            <div className="mt-5 flex md:flex-row gap-2">
              <button
                onClick={openClosed}
                className="flex w-auto h-10 justify-center p-3 gap-1 rounded-md items-center bg-white">
                <Image src={backIcon} alt="backIcon" className="w-5 h-5 md:w-6 md:h-6"/>
                <p className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text font-bold">Voltar</p>
              </button>
              <button
                onClick={handleClickDelete}
                className="flex items-center text-slate-50 h-10 w-auto justify-center p-3 gap-1 bg-[#ED254E] rounded-md">
                <Image src={removeIcon} alt="cadastrar" />
                <p className="font-bold">Remover</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default RemoveModal;
