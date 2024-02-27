"use client"

import Image from "next/image";
import closeIcon from "@/app/assets/closeIcon.svg"
import namePet from "@/app/assets/namePet.svg"
import nameDono from "@/app/assets/nameDono.svg"
import ageIcon from "@/app/assets/ageIcon.svg"
import phoneIcon from "@/app/assets/phoneIcon.svg"
import dateIcon from "@/app/assets/dateIcon.svg"
import backIcon from "@/app/assets/backIcon.svg"
import editeIcon2 from "@/app/assets/editeIcon2.svg"
import editeIconWhite from "@/app/assets/editeIconWhite.svg"

import { useState } from "react";
import { IDeleteClient } from "../types/IClients";
import { toast } from 'sonner';
import { IClientRegister, ICreatedClient } from "../types/IClients";
import { createClient, updateClient } from "@/util/endypoints";

type StyleRadio = "dog" | "cat"

interface IProps {
  openClosed: () => void;
  client: IDeleteClient;
}

const RemoveModal = ({ openClosed, client }: IProps) => {
  const clientFormat = {
    animal: client.animal,
    owner: client.owner,
    name: client.name,
    ownerPhone: client.ownerPhone,
    raca: client.raca,
    nascimento: client.nascimento
  }

  const [clienteUpdate, setClientUpdate] = useState<IClientRegister>(clientFormat);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientUpdate({ ...clienteUpdate, [name]: value});
  };

  const handleClickUpdate = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await updateClient(client.id, client.ownerId, clienteUpdate);
      setClientUpdate({} as ICreatedClient);
      toast.success("cliente atualizado com sucesso :D")
    } catch (err) {
      toast.error('Por favor preencha todos os dados!')
    } finally {
      openClosed();
    }
  }

  console.log(clienteUpdate)
  return (
    <dialog
    style={{
      background: "linear-gradient(80deg, rgba(0, 30, 77, 1) 20%, rgba(0, 8, 20, 1) 100%)",
    }}
      className="rounded-md fixed inset-0 flex items-center justify-center overflow-auto border-2 border-blue-600"
      open
    >
      <div className="p-1 rounded-lg overflow-hidden shadow-xl h-auto w-auto">
        <div className="m-5 flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Image src={editeIcon2} className="w-12 h-12 md:w-16 md:h-16" alt="cadastrar" />
            <h1 className="text-slate-50 md:text-xl font-bold">Editar</h1>
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
                <input
                  type="text"
                  placeholder="Nome Sobrenome"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={clienteUpdate.name}
                  className="w-full md:w-64 h-10 border-2 rounded-md p-2 border-slate-500 bg-transparent"
                />
              </label>

              <div className="flex flex-col gap-2">
                <p className="flex text-base gap-2 text-slate-50">
                  <Image src={ageIcon} alt="name-dono" className="w-5 h-5 md:w-6 md:h-6"/>
                  Animal
                </p>
                <div className="flex gap-3">
                  <label htmlFor="dog" className={`flex justify-center text-base text-slate-50 gap-2 border-2 p-1 rounded-md ${clienteUpdate.animal === 'cat' ? 'border-slate-500' : 'border-slate-50'}`}>
                    Cachorro
                    <input
                      className="mx-2"
                      type="radio"
                      name="animal"
                      value="dog"
                      id="dog"
                      onChange={handleChange} />
                  </label>

                  <label
                    htmlFor="cat"
                    className={`flex items-center justify-around text-base text-slate-50 gap-2 border-2 p-1 rounded-md ${clienteUpdate.animal === 'dog' ? 'border-slate-500' : 'border-slate-50'}`}>
                    Gato
                    <input
                      className="mx-2"
                      type="radio"
                      value="cat"
                      required
                      name="animal"
                      id="cat"
                      onChange={handleChange} />
                  </label>
                </div>
              </div>

            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <label htmlFor="owner" className="flex flex-col items-start gap-2 text-base text-slate-50">
                <div className="flex gap-2 "><Image src={nameDono} alt="name-pet" className="w-5 h-5 md:w-6 md:h-6" />
                Dono</div>
                <input
                  type="text"
                  value={clienteUpdate.owner}
                  onChange={handleChange}
                  placeholder="Nome Sobrenome"
                  name="owner"
                  id="owner"
                  className="w-full md:w-64 h-10 border-2 rounded-md p-2 border-slate-500 bg-transparent"
                />
              </label>

              <label htmlFor="raca" className="flex flex-col items-start gap-2 text-base text-slate-50">
                <div className="flex gap-2 "><Image src={ageIcon} alt="name-pet" className="w-5 h-5 md:w-6 md:h-6" />
                Raça</div>
                <input
                  type="text"
                  value={clienteUpdate.raca}
                  name="raca"
                  onChange={handleChange}
                  required
                  placeholder="Raça"
                  id="raca"
                  className="w-full md:w-64 h-10 border-2 rounded-md p-2 border-slate-500 bg-transparent" />
              </label>
            </div>

            <div className="mb-2 flex flex-col md:flex-row gap-2">
              <label htmlFor="ownerPhone" className="flex flex-col items-start gap-2 text-base text-slate-50">
                <div className="flex gap-2 ">
                  <Image src={phoneIcon} alt="name-pet" className="w-5 h-5 md:w-6 md:h-6" />
                  Telefone
                </div>
                <input
                  type="text"
                  value={clienteUpdate.ownerPhone}
                  required
                  onChange={handleChange}
                  placeholder="(81) 9 8970-3434"
                  name="ownerPhone"
                  id="ownerPhone"
                  className="w-full md:w-64 h-10 border-2 rounded-md p-2 border-slate-500 bg-transparent"
                />

              </label>

              <label htmlFor="nascimento" className="flex flex-col items-start gap-2 text-base text-slate-50">
                <div className="flex gap-2 ">
                  <Image src={dateIcon} alt="name-pet" className="w-5 h-5 md:w-6 md:h-6" />
                    Nascimento
                    <span className="font-bold text-slate-500">(Aproximado)</span>
                </div>
                <input
                  type="date"
                  id="nascimento"
                  value={clienteUpdate.nascimento}
                  name="nascimento"
                  required
                  onChange={handleChange}
                  className="w-full md:w-64 h-10 border-2 rounded-md p-2 border-slate-500 bg-transparent" />
              </label>
            </div>

            <div className="mt-5 flex md:flex-row gap-2">
              <button
                onClick={openClosed}
                className="flex w-auto h-10 justify-center p-3 gap-1 rounded-md items-center bg-white">
                <Image src={backIcon} alt="backIcon" className="w-5 h-5 md:w-6 md:h-6"/>
                <p className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text font-bold">Voltar</p>
              </button>
              <button
                onClick={handleClickUpdate}
                className="flex items-center text-slate-50 h-10 w-auto justify-center p-3 gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md">
                <Image src={editeIconWhite} alt="cadastrar" />
                <p className="font-bold">Salvar</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default RemoveModal;
