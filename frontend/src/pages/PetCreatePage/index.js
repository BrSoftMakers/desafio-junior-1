import React, { useState } from 'react';
import { useHistory } from 'react-router';

import api from '../../services/api';
import Header from '../../components/Header';

import * as S from './styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const PetCreatePage = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [pet, setPet] = useState("");
    const [petBreed, setPetBreed] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [phone, setPhone] = useState("");
    const history = useHistory();

    const createPet = async (event) => {
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
            await api.post("/create", body);
            alert("Pet cadastrado com sucesso!")
            
            setName("");
            setAge("");
            setPet("");
            setPetBreed("");
            setOwnerName("");
            setPhone("");
        } catch (error) {
            alert("Erro ao criar novo pet :(");
        };
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <S.Wrapper>
            <Header />
            <S.BackButton>
                <span onClick={goBack}>Voltar</span>
            </S.BackButton>
            <S.Container>
                <h2>Novo Pet</h2>
                <S.Inputs>
                    <form onSubmit={createPet}>
                        <TextField
                            value={name}
                            onChange={e => setName(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Nome"
                            size="medium"
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
                            size="medium"
                            type="number"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Idade"
                        />
                        <FormControl 
                            variant="outlined" 
                            style={{ 
                                width: "9.8rem",
                                marginLeft: "0.8rem", 
                                marginTop: "1rem"
                            }}
                        >
                            <InputLabel id="select-pet">Pet</InputLabel>
                            <Select
                                labelId="select-pet"
                                value={pet}
                                onChange={e => setPet(e.target.value)}
                                required
                                label="Pet"
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
                            size="medium"
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
                            size="medium"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Nome do dono"
                        />
                        <TextField
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Tel/Cel"
                            size="medium"
                            type="number"
                            InputLabelProps={{ shrink: true }}
                            placeholder="Tel/Cel"
                        />
                        <S.ButtonSave>
                            <Button
                                variant="contained"
                                size="medium"
                                type="submit"
                                color="primary"
                            >
                                Salvar
                            </Button>
                        </S.ButtonSave>
                    </form>
                </S.Inputs>
            </S.Container>
        </S.Wrapper>
    );
};

export default PetCreatePage;
