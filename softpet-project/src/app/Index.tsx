'use client'
import styles from "../styles/index.module.css";
import Logo from './components/icons/Logo';
import CadastrarPet from "./components/cadastrarPet";
import SearchIcon from './components/icons/SearchIcon.svg'
import { useEffect, useState } from "react";
import { IPets } from "../../types/pets";
import PetList from "./components/petList";
import { getAllPets } from "../../api";

export default function Index({ }) {
  useEffect(() => {
    async function fetchPets() {
      try {
        const petsData = await getAllPets();
        setPets(petsData);
      } catch (error) {
        console.error('Erro ao obter os pets:', error);
      }
    }

    fetchPets(); 
  }, []); 

  const [pets, setPets] = useState<IPets[]>([]);
  const [searchPet, setSearchPet] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPet(event.target.value); 
  };

  
  const handleSearch = () => {
    
   console.log(searchPet);
   };

  return (
    <main className={styles.main}>
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
        <h3 className={styles.h3}>SoftPet</h3>
      </div>
      <div className={styles.Containersearch}>
        <div className={styles.search}>
          <span><SearchIcon /></span>
          <input onChange={handleInputChange} type="text" name="text" id="text" />
          <button onClick={handleSearch} className={styles.searchButton}>Pesquisar</button>
        </div>
        <CadastrarPet pets={pets} />

      </div>

    

    </header>
    <div>
    <PetList pets={pets} searchpet={searchPet}/>
    </div>
    </main>
  );
}
