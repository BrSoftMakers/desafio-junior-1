import React, { useState } from 'react';

import api from '../../../services/api';

import * as S from './styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const EditPet = ({ pets, showPetEditModal, getPets }) => {
    const [name, setName] = useState(pets.name);
    const [age, setAge] = useState(pets.age);
    const [pet, setPet] = useState(pets.pet);
    const [petBreed, setPetBreed] = useState(pets.pet_breed);
    const [ownerName, setOwnerName] = useState(pets.owner_name);
    const [phone, setPhone] = useState(pets.phone);

    const handleEditPet = async (event) => {
        event.preventDefault();

        const body = {
            name: name,
            age: Number(age),
            pet: pet,
            petBreed: petBreed,
            ownerName: ownerName,
            phone: phone
        };

        try {
            await api.put(`/update/${pets.id}`, body);
            
            alert("Pet atualizado com sucesso!");
            getPets();
            showPetEditModal();
        } catch (error) {
            alert("Erro ao atualizar pet :(");
        };
    };

    return (
        <S.Wrapper>
            <S.Container>
                <h2>Editar Pet</h2>
                <S.Inputs>
                    <form onSubmit={handleEditPet}>
                        <TextField
                            value={name}
                            onChange={e => setName(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Nome"
                            size="small"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Nome"
                            autoFocus
                        />
                        <TextField
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            label="Idade"
                            size="small"
                            type="number"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Idade"
                        />
                        <FormControl 
                            variant="outlined" 
                            style={{ 
                                marginLeft: "1rem",
                                marginTop: "0.6rem"
                            }}
                        >
                            <InputLabel id="select-pet">Pet</InputLabel>
                            <Select
                                labelId="select-pet"
                                value={pet}
                                onChange={e => setPet(e.target.value)}
                                label="Pet"
                                style={{ width: "10rem", height: "3.2rem" }}
                            >
                                <MenuItem value="">
                                    <em>Selecione</em>
                                </MenuItem>
                                <MenuItem value="Gato">Gato</MenuItem>
                                <MenuItem value="Cachorro">Cachorro</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            value={petBreed}
                            onChange={e => setPetBreed(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Raça"
                            size="small"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Raça"
                        />
                        <TextField
                            value={ownerName}
                            onChange={e => setOwnerName(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Nome do dono"
                            size="small"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Nome do dono"
                        />
                        <TextField
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            label="Tel/Cel"
                            size="small"
                            type="number"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Tel/Cel"
                        />
                        <S.Buttons>
                            <Button
                                variant="contained"
                                size="medium"
                                type="submit"
                                color="primary"
                                style={{ width: "6.5rem", marginRight: "1rem" }}
                            >
                                Salvar
                            </Button>
                            <Button
                                variant="contained"
                                size="medium"
                                type="submit"
                                style={{ width: "6.5rem" }}
                                onClick={showPetEditModal}
                            >
                                Cancelar
                            </Button>
                        </S.Buttons>
                    </form>
                </S.Inputs>
            </S.Container>
        </S.Wrapper>
    );
};

export default EditPet;
