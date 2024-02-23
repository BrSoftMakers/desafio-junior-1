'use client'
import styles from '../../styles/petlist.module.css';
import PetIcon from './icons/PetIcon';
import PetDonoIcon from './icons/PetDonoIcon';
import PetNameIcon from './icons/PetNameIcon';
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
      setIsPopupOpen(false); // Fechar o popup quando o item é desselecionado
    } else {
      setSelectedPet(pet);
      setIsPopupOpen(true); // Abrir o popup quando o item é selecionado
    }
  };

  return (
    <div className={styles.ContainerPetList}>
      {pets.map(pet => (
        <Pets
          key={pet.id}
          pet={pet}
          onClick={() => handlePetClick(pet)}
          selectedPet={selectedPet}
          isClicked={isPopupOpen && selectedPet?.id === pet.id} // Adicionar a classe "clicked" se o popup estiver aberto e este for o item selecionado
        />
      ))}
    </div>
  );
};

export default PetList;
