import App from './app'
import dbConnect, { pool } from "@/utils/dbConnect";
import CadastrarPet from '@/components/cadastrarPet';
import { redirect } from "next/navigation";

export default function Page() {
  
  dbConnect()
  const createPet = async (formData) => {
    console.log('Dados do formulário:', formData);
};
  return (
    <main>
      <link
       href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" 
       rel="stylesheet"/>
         <App/>
         <CadastrarPet createPet={createPet} />
    </main>
  );
}
