
import React, { useState } from 'react';
import styles from '../../styles/petlist.module.css';
import PetIcon from './icons/PetIcon';
import PetDonoIcon from './icons/PetDonoIcon';
import PetNameIcon from './icons/PetNameIcon';
import PetArrowInfo from './icons/PetArrowInfo';
import TelefoneIcon from './icons/TelefoneIcon.svg';
import PetRaca from './icons/SelectAnimalIcon.svg';
import PetNascimento from './icons/DataIcon.svg';
import PetEdit from './icons/PetEdit.svg';
import PetRemove from './icons/PetRemove.svg'
import { IPets } from '../../../types/pets';
//import PetPopup from './petPopup';

interface PetsProps {
    pet: IPets;
    onClick: () => void;
    selectedPet?: IPets;
    isClicked: boolean;
}

const Pets: React.FC<PetsProps> = ({ pet, onClick, selectedPet, isClicked }) => {
    return (
        <div>
            <div className={`${styles.Pet} ${isClicked ? styles.clicked : ''}`} onClick={onClick}>
                <span className={styles.PetIcon}>
                    <PetIcon />
                </span>
                <div key={pet.id} className={styles.ContainerPetInfo}>
                    <span className={styles.PetInfo}><PetNameIcon /> <p>{pet.nome}</p></span>
                    <span className={styles.PetInfo}><PetDonoIcon /> <p>{pet.dono}</p></span>
                </div>
                <span className={styles.PetArrowInfo}> <PetArrowInfo /> </span>
            </div>
            {selectedPet && selectedPet.id === pet.id && (
                <div className={styles.PetInfoPopup}>
                    <div className={styles.PetInfoPopup_info_container}>
                        <div className={styles.PetInfoPopup_info}>
                            <span><PetRaca /><p>Raça: {pet.raca}</p></span>
                            <span><TelefoneIcon /><p>Telefone: {pet.telefone}</p></span>
                            <span><PetNascimento /><p>Idade: {pet.nascimento}</p></span>
                        </div>
                        <div className={styles.petInfoPopup_buttons}>
                            <button className={styles.PetInfoPopup_info_edit}><PetEdit/>Editar</button>
                            <button className={styles.PetInfoPopup_info_remove}><PetRemove/>Remover</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default Pets