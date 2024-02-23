import React from 'react';
import styles from '../../styles/petlist.module.css';
import PetIcon from './icons/PetIcon';
import PetDonoIcon from './icons/PetDonoIcon';
import PetNameIcon from './icons/PetNameIcon';
import PetArrowInfo from './icons/PetArrowInfo';
import { IPets } from '../../../types/pets';

interface PetsProps {
    pet: IPets
}

const Pets: React.FC<PetsProps> = ({ pet }) => {
    return (
        <div>
                <div className={styles.Pet}>

                    <span className={styles.PetIcon}>
                        <PetIcon />
                    </span>

                    <div key={pet.id} className={styles.ContainerPetInfo}>
                    <span className={styles.PetInfo}><PetNameIcon /> <p>{pet.nome}</p></span>
                    <span className={styles.PetInfo}><PetDonoIcon /> <p>{pet.dono}</p></span>
                    </div>

                    <span> <PetArrowInfo /> </span>
            </div>
        </div>
    )
}
export default Pets