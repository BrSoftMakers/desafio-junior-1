import React from 'react';

import api from '../../../services/api';

import * as S from './styles';
import Button from '@material-ui/core/Button';

const DeletePet = ({ petId, showPetDeleteModal, getPets }) => {

    const handleDeletePet = async () => {
        try {
            await api.delete(`/delete/${petId}`);
            
            alert("Pet deletado com sucesso!");
            getPets();
            showPetDeleteModal();
        } catch (error) {
            alert("Erro ao deletar pet :(");
        };
    };

    return (
        <S.Wrapper>
            <S.Container>
                <h2>Deletar Pet</h2>
                <S.Text>
                    <span>Deseja deletar esse pet?</span>
                </S.Text>
                <S.Buttons>
                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        style={{ width: "6.5rem", marginRight: "1rem" }}
                        onClick={handleDeletePet}
                    >
                        Deletar
                    </Button>
                    <Button
                        variant="contained"
                        size="medium"
                        type="submit"
                        style={{ width: "6.5rem" }}
                        onClick={showPetDeleteModal}
                    >
                        Cancelar
                    </Button>
                </S.Buttons>
            </S.Container>
        </S.Wrapper>
    );
};

export default DeletePet;