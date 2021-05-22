import React, { useState } from 'react';

import petCard from '../../images/pet-card.png';
import EditPet from '../Modal/EditPet';
import DeletePet from '../Modal/DeletePet';

import * as S from './styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const PetCard = ({ pets, showScroll, getPets }) => {
    const [displayPetEditModal, setDisplayPetEditModal] = useState(false);
    const [displayPetDeleteModal, setDisplayPetDeleteModal] = useState(false);

    const showPetEditModal = () => {
        setDisplayPetEditModal(!displayPetEditModal);
        showScroll();
    };

    const showPetDeleteModal = () => {
        setDisplayPetDeleteModal(!displayPetDeleteModal);
        showScroll();
    };

    return (
        <S.Wrapper>
            <S.PetImage>
                <img src={petCard} alt="Pet-Card" />
            </S.PetImage>
            <S.PetInfos>
                <S.Buttons>
                    <EditIcon 
                        style={{ marginRight: "8px", cursor: "pointer" }} 
                        onClick={showPetEditModal}
                    />
                    <DeleteIcon 
                        style={{ cursor: "pointer" }} 
                        onClick={showPetDeleteModal}
                    />
                </S.Buttons>
                <p><strong>Nome:</strong> <span>{pets.name}</span></p>
                <p><strong>Idade:</strong> <span>{pets.age} ano(s)</span></p>
                <p><strong>Pet:</strong> <span>{pets.pet}</span></p>
                <p><strong>Raça:</strong> <span>{pets.pet_breed}</span></p>
                <p><strong>Nome do dono:</strong> <span>{pets.owner_name}</span></p>
                <p><strong>Tel/Cel:</strong> <span>{pets.phone}</span></p>
            </S.PetInfos>
            {displayPetEditModal ? 
                <EditPet
                    showPetEditModal={() => showPetEditModal()}
                    pets={pets}
                    getPets={() => getPets()}
                /> 
                : null
            }
            {displayPetDeleteModal ?
                <DeletePet 
                    showPetDeleteModal={() => showPetDeleteModal()}
                    petId={pets.id}
                    getPets={() => getPets()}
                />
                : null
            }
        </S.Wrapper>
    );
};

export default PetCard;
