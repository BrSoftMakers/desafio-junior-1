'use client'
import styles from '../../styles/petlist.module.css';
import PetIcon from './icons/PetIcon';
import PetArrowInfo from './icons/PetArrowInfo';
import Pets from './pets';
import { IPets } from '../../../types/pets';
import { useEffect, useState } from 'react';
import { getAllPets } from '../../../api';

interface PetListProps {
  pets: IPets[];
  searchpet:string
}

const PetList: React.FC<PetListProps> = ({ pets,searchpet }) => {
  
  const [selectedPet, setSelectedPet] = useState<IPets | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePetClick = (pet: IPets) => {
    if (selectedPet && selectedPet.id === pet.id) {
      setSelectedPet(null);
      setIsPopupOpen(false);
    } else {
      setSelectedPet(pet);
      setIsPopupOpen(true);
    }
  };
  
  const [petsFilter, setPetsFilter] = useState<IPets[]>([]);
  const [searchPet, setSearchPet] = useState<string>('');

  const filteredPets = pets.filter(pet => {
    return pet.nome.toLowerCase().includes(searchpet.toLowerCase());
  });
  
  useEffect(() => {
    async function fetchPets() {
      try {
        const petsData = await getAllPets();
        setPetsFilter(petsData);
      } catch (error) {
        console.error('Erro ao obter os pets:', error);
      }
    }

    fetchPets(); 
  }, []); 

  

  return (
    <div className={styles.ContainerPetList}>
      {filteredPets.map((pet, index) => (
        <Pets
          key={index}
          pet={pet}
          onClick={() => handlePetClick(pet)}
          selectedPet={selectedPet}
          isClicked={isPopupOpen && selectedPet?.id === pet.id}
        />
      ))}
    </div>
  );
};

export default PetList;
