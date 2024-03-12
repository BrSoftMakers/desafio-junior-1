
import { getAllPets } from '../../api'
import dbConnect, { pool } from "../utils/dbConnect";
import CadastrarPet from './components/cadastrarPet';
import Index from './Index';
import PetList from './components/petList';

export default async function Page() {
  const pets = await getAllPets();
  console.log(pets);
  dbConnect()

  return (
    <main>
      <link
       href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" 
       rel="stylesheet"
       />
        <Index/>
    </main>
  );
}
