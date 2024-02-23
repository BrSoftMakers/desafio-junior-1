'use client'
import styles from '../../styles/petlist.module.css';
import PetIcon from './icons/PetIcon';
import PetDonoIcon from './icons/PetDonoIcon';
import PetNameIcon from './icons/PetNameIcon';
import PetArrowInfo from './icons/PetArrowInfo';
import Pets from './pets';
import { IPets } from '../../../types/pets';
import { useState } from 'react';

interface PetListProps{
    pets:IPets[];
}

const PetList:React.FC<PetListProps> = ({ pets }) =>{
  
const [selectedPet, setSelectedPet] = useState<IPets | null>(null);

const handlePetClick = (pet: IPets) => {
  if (selectedPet && selectedPet.id === pet.id) {
      setSelectedPet(null);
  } else {
      setSelectedPet(pet);
  }
}
  return (
    <div className={styles.ContainerPetList}>
        

        {pets.map(pet => (
         <Pets key={pet.id} pet={pet} onClick={() => handlePetClick(pet)} selectedPet={selectedPet} />
          
      ))}
      {selectedPet && (
                <div className={styles.PetInfoPopup}>
                    <p>Raça: {selectedPet.raca}</p>
                    <p>Telefone: {selectedPet.telefone}</p>
                    <p>Idade: {selectedPet.nascimento}</p>
                    <button>Editar</button>
                    <button>Remover</button>
                </div>
            )}
       
        
    </div>
  );
}
export default PetList
