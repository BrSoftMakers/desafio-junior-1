import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from 'firebase/auth';

export function Login(props: any) {
  const [name, setName] = useState('');
  const [buttonSignInColor, setButtonSignInColor] = useState(false)

  useEffect(() => {
    name.length >= 5 ? setButtonSignInColor(true) : setButtonSignInColor(false);
  }, [name]);

  async function handleSubmit() {
    try {
      await signInWithEmailAndPassword(props.auth, 'leandro@gmail.com', name)
      alert('Usuário Logado');
    } catch (err) {
      alert('Usuário Incorreto');
    }
  }

  return (
    <div className="flex bg-[#D8F6FF] h-screen justify-center w-screen items-center">
      <div className="flex flex-col">
        <div className="flex justify-center mb-2 md:mb-4">
          <img src="src/assets/logo.png"/>
        </div>

        <div 
          className="flex bg-white flex-col p-8 m-3 rounded-3xl shadow-[2px_2px_rgba(0,0,0,0.3)]"  
        >
          <span className="text-center text-[#05799E]">
            Manipule os dados dos seus pets, e consiga uma<br /> 
            organização de todos os bichinhos do seu<br /> 
            <strong>petshop</strong>.
          </span>
          <strong className="text-xl m-2">Nome:</strong>
          <input 
            className="bg-[#F2F2F2] h-12 rounded shadow-[0_1px_rgba(0,0,0,0.6)] m-2 px-3 focus:outline-none"
            onChange={(e) => setName(e.target.value)}
          />

          {
            buttonSignInColor ?
            <button 
              type="submit" 
              className="bg-[#49B7E7] rounded-xl py-3 pb-2 m-1"
              onClick={handleSubmit}
            >
              <strong className="text-xl text-white">Entrar</strong>
            </button> :
            <button className="bg-[#BCBCBC] rounded-xl py-3 pb-2 m-1" disabled>
              <strong className="text-xl">Entrar</strong>
            </button>
          }
        </div>

      </div>
      
    </div>
  )
}