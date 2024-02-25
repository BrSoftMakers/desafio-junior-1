'use client'
import styles from '../../styles/petlist.module.css';
import PetIcon from './icons/PetIcon';
import PetArrowInfo from './icons/PetArrowInfo';
import Pets from './pets';
import { IPets } from '../../../types/pets';
import { useState } from 'react';

interface PetListProps {
  pets: IPets[];
}

const PetList: React.FC<PetListProps> = ({ pets }) => {
  
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

  return (
    <div className={styles.ContainerPetList}>
      {pets.map((pet, index) => (
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
