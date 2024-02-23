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
  
const [showPetPopup,setShowPetPopup]= useState(false);
const [selectedPet, setSelectedPet] = useState<IPets | null>(null);

const handlePetClick = (pet: IPets) => {
    setSelectedPet(pet);
    setShowPetPopup(true);
}

const handleClosePopup = () => {
    setShowPetPopup(false);
}
  return (
    <div className={styles.ContainerPetList}>
        

        {pets.map(pet => (
        <Pets key={pet.id} pet={pet} onClick={() => handlePetClick(pet)}  />

      ))}
      {showPetPopup && selectedPet && (
                <div className={styles.PetPopup}>
                    <h2>{selectedPet.nome}</h2>
                    <p>Animal: {selectedPet.animal}</p>
                    <p>Dono: {selectedPet.dono}</p>
                    <p>Raça: {selectedPet.raca}</p>
                    <button onClick={handleClosePopup}>Fechar</button>
                </div>
            )}
       
        
    </div>
  );
}
export default PetList
