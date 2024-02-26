"use client"

import Image from "next/image";
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import add from '../assets/add.svg'
import { ChangeEvent, useState } from "react";
import Register from "./register-modal";
import { useGlobalContext } from "../context/store";

const Header = () => {
  const {setTextSearch, textSearch, dataFiltered, setFiltered} = useGlobalContext()
  const [registerIsOpe, setRegisterIsOpen] = useState<boolean>()

  const handleClickModalRegisterOpen = () => {
    setRegisterIsOpen(!registerIsOpe)
  }

  const handleClickSearch = () => {
    const newClients = dataFiltered(textSearch)
    setFiltered(newClients)
  }

  return (
    <>
    <header className="flex flex-col items-center m-4 md:items-start md:gap-10">
      <Image className="w-56 h-20" src={logo} alt="logo-do-projeto" />
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="flex items-center border-2 border-gray-500 rounded-md">
          <div className="hidden sm:flex items-center bg-slate-700 rounded-l-md h-10 w-10 p-1 transition duration-300 ease-in-out hover:bg-gray-600">
            <Image src={search} alt="pesquisar" />
          </div>
          <input
            type="text"
            value={textSearch}
            onChange={(e) => setTextSearch(e.target.value)}
            className="w-full md:w-4/5 lg:w-80 h-8 bg-transparent"
          />

    <button
      onClick={handleClickSearch}
      className="bg-slate-600 rounded-md h-8 px-4 m-1 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white">
      Pesquisar
    </button>
  </div>

  <button
    onClick={handleClickModalRegisterOpen}
    className="flex items-center
      h-10
      gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md p-3 "
    >
    <Image
      src={add}
      alt="cadastrar"
    />
      Cadastrar
    </button>

</div>
</header>
{
  registerIsOpe && <Register openClosed={handleClickModalRegisterOpen} />
}
    </>
  );
}

export default Header;
