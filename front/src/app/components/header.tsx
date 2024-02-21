import Image from "next/image";
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import add from '../assets/add.svg'

const Header = () => {
  return (
    <header className="flex flex-col justify-between gap-8">

      <Image src={logo} alt="logo-do-projeto" width={182} height={48}/>

      <div className="flex justify-between">

        <div className="flex">

          <div className="flex items-center border-2 border-gray-500 p-1">
            <Image
              src={search}
              alt="pesquisar"
              className="rounded-l-md bg-slate-700 p-1 w-11"
            />
            <input type="text" className="w-2/3 h-11" />
            <button className="bg-slate-600 rounded-r-md">
              Pesquisar
            </button>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-md p-3">
          <Image src={add} alt="cadastrar" width={20} height={20}/>
          Cadastrar
        </button>

      </div>
    </header>
  );
}

export default Header;