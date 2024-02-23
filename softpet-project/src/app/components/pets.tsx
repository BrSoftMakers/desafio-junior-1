
import React, { useState } from 'react';
import styles from '../../styles/petlist.module.css';
import PetIcon from './icons/PetIcon';
import PetDonoIcon from './icons/PetDonoIcon';
import PetNameIcon from './icons/PetNameIcon';
import PetArrowInfo from './icons/PetArrowInfo';
import { IPets } from '../../../types/pets';
//import PetPopup from './petPopup';

interface PetsProps {
    pet: IPets;
    onClick: () => void;
}

const Pets: React.FC<PetsProps> = ({ pet,onClick }) => {
    
    return (
        <div>
                <div className={styles.Pet} onClick={onClick}>

                    <span className={styles.PetIcon}>
                        <PetIcon />
                    </span>

                    <div key={pet.id} className={styles.ContainerPetInfo}>
                    <span className={styles.PetInfo}><PetNameIcon /> <p>{pet.nome}</p></span>
                    <span className={styles.PetInfo}><PetDonoIcon /> <p>{pet.dono}</p></span>
                    </div>

                    <span className={styles.PetArrowInfo}> <PetArrowInfo /> </span>
                </div>
                <div className={styles.PetInfoPopup}>
                    
                </div>
                
               


        </div>
    )
}
export default Pets