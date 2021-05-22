import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import api from '../../services/api';
import Header from '../../components/Header';
import PetCard from '../../components/PetCard';

import * as S from './styles';
import Button from '@material-ui/core/Button';

const HomePage = () => {
    const [pets, setPets] = useState("");
    const [scroll, setScroll] = useState(false);
    const history = useHistory();

    useEffect(() => {
        getPets();
    }, []);

    const getPets = async () => {
        try {
            const response = await api.get("/");
            
            setPets(response.data.pets);
        } catch (error) {
            alert("Erro ao carregar lista de pets :(");
        };
    };

    const goToPetCreatePage = () => {
        history.push('/create');
    };

    const showScroll = () => {
        setScroll(!scroll);
    };

    return (
        <S.Wrapper visibleScroll={scroll}>
            <Header />
            <S.Container>
                <S.TextAndButton>
                    <h2>Pets Cadastrados</h2>
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={goToPetCreatePage}
                    >
                        Cadastrar Pet
                    </Button>
                </S.TextAndButton>
                <S.Cards>
                    {pets ? pets.map((pet, index) => 
                                <PetCard 
                                    key={index} 
                                    pets={pet} 
                                    showScroll={() => showScroll()}
                                    getPets={() => getPets()}
                                />
                            ) 
                            : null
                    }
                </S.Cards>
            </S.Container>
        </S.Wrapper>
    );
};

export default HomePage;
