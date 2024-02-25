"use client"

import Image from "next/image";
import closeIcon from "@/app/assets/closeIcon.svg"
import registerIcon from "@/app/assets/registerIcon.svg"
import namePet from "@/app/assets/namePet.svg"
import nameDono from "@/app/assets/nameDono.svg"
import ageIcon from "@/app/assets/ageIcon.svg"
import phoneIcon from "@/app/assets/phoneIcon.svg"
import dateIcon from "@/app/assets/dateIcon.svg"
import add from "@/app/assets/add.svg"
import backIcon from "@/app/assets/backIcon.svg"

import { useState } from "react";

type StyleRadio = "dog" | "cat"

interface IProps {
  openClosed: () => void
}

const Register = ({ openClosed }: IProps) => {
  const [selectedOption, setSelectedOption] = useState<StyleRadio>();

  return (
    <dialog
      style={
        {
          borderRadius: "10px",
          background: "linear-gradient(80deg, rgba(0, 30, 77, 1) 20%, rgba(0, 8, 20, 1) 100%", backgroundRepeat: 'no-repeat'}
      }
      className="fixed top-52 flex my-2  p-4 flex-col justify-center rounded-md w-full border-2 md:w-2/3 lg:w-1/2 xl:w-2/5 h-auto md:p-8 lg:p-12" open>
      <div className="flex items-center justify-between m-2 md:m-2">
        <div className="flex items-center gap-2 md:gap-4">
          <Image src={registerIcon} className="w-12 h-12 md:w-16 md:h-16" alt="register" />
          <h1 className="text-slate-50 text-lg md:text-xl">Cadastrar</h1>
        </div>
        <button
          onClick={openClosed}
          >
        <Image src={closeIcon} alt="close" />
      </button>
      </div>

      <form className="flex flex-col m-3 md:mx-5 gap-3 items-start">
        <div className="flex flex-col items-center md:flex-row gap-3">
          <label htmlFor="name" className="flex flex-col items-start gap-2 text-base text-slate-50">
            <span className="flex gap-2 ">
              <Image src={namePet} alt="name-pet" className="w-5 h-5 md:w-6 md:h-6" />
              Nome
            </span>
            <input className="w-full md:w-64 h-10 border-2 rounded-md bg-transparent p-2 border-slate-500" type="text" id="name" placeholder="Nome Sobrenome" />
          </label>

          <div className="flex flex-col gap-2">
            <p className="flex text-base gap-2 text-slate-50">
              <Image src={ageIcon} alt="name-dono"/>
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
            <input className="w-full md:w-64 h-10 border-2 rounded-md bg-transparent p-2 border-slate-500" type="text" id="name" placeholder="Nome Sobrenome" />
          </label>

          <label htmlFor="Raca" className="flex flex-col items-start gap-2 text-base text-slate-50">
            <div className="flex gap-2 "><Image src={ageIcon} alt="name-pet" className="w-5 h-5 md:w-6 md:h-6" />
            Raça</div>
            <input className="w-full md:w-64 h-10 border-2 rounded-md bg-transparent p-2 border-slate-500" type="text" id="name" placeholder="Raça" />
          </label>
        </div>

        <div className="flex flex-col md:flex-row gap-2">
          <label htmlFor="phone" className="flex flex-col items-start gap-2 text-base text-slate-50">
            <div className="flex gap-2 "><Image src={phoneIcon} alt="name-pet" className="w-5 h-5 md:w-6 md:h-6" />
            Telefone</div>
            <input className="w-full md:w-64 h-10 border-2 rounded-md bg-transparent p-2 border-slate-500" type="tel" id="phone" placeholder="(00) 0 0000-0000" />
          </label>

          <label htmlFor="nascimeto" className="flex flex-col items-start gap-2 text-base text-slate-50">
            <div className="flex gap-2 ">
              <Image src={dateIcon} alt="name-pet" className="w-5 h-5 md:w-6 md:h-6" />
              Nascimento
              <span className="font-bold">
              (Aproximado)
              </span>
            </div>
            <input className="w-full md:w-64 h-10 border-2 rounded-md bg-transparent p-2 border-slate-500 focus:outline-none focus:border-blue-500" type="date" id="name" placeholder="22/09/2020" />
          </label>
        </div>

        <div className="flex md:flex-row gap-2">
          <button className="flex w-auto h-10 justify-center p-3 gap-1 rounded-md items-center bg-white">
              <Image src={backIcon} alt="edite-icon" className="size-4"/>
              <p className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">Editar</p>
            </button>
        <button
            className="flex items-center text-slate-50 h-10 w-auto justify-center p-3 gap-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"
            >
            <Image
              src={add}
              alt="cadastrar"
            />
              Cadastrar
            </button>
        </div>
      </form>
    </dialog>
  );
}

export default Register;
