import React, { useState, useEffect, useCallback } from 'react';
import {
  Link,
  useHistory,
  useParams,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logoPetShop.png';
import picture from '../../assets/picture.png';

import {
  Header,
  Title,
  Menu,
  MenuButton,
  Pets,
  PetsContainer,
  InfoContainer,
  Bloco,
  PetsButton,
} from './styles';

interface Pet {
  id: string;
  pet_name: string;
  age: number;
  specie: string;
  breed: string;
  owner_name: string;
  phone_number: string;
}

const PetsList: React.FC = () => {
  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  const routMatch = useRouteMatch();
  const [pets, setPets] = useState<Pet[]>([]);
  const [petSelected, setPetSelected] = useState('');

  useEffect(() => {
    async function getPets(): Promise<void> {
      const { data } = await api.get<Pet[]>(`pets`);

      const sort = data.sort((a, b) => (a.id < b.id ? -1 : 1));
      setPets(sort);
    }

    getPets();
  }, [location.key]);

  const handleDelete = useCallback(() => {
    if (!petSelected) {
      alert('Selecione um cadastro');
      return;
    }

    async function deletePets(): Promise<void> {
      const response = await api.delete(`pets/${petSelected}`);

      setPets(response.data);
    }

    deletePets();
  }, [petSelected]);

  const handleNavegate = useCallback(() => {
    if (!petSelected) {
      alert('Selecione um cadastro');
      return;
    }
    history.push(`/register/${petSelected}`);
  }, [history, petSelected]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Petshop" />
        <Title>Cadastro de Animais</Title>
      </Header>

      <Menu>
        <Link to="/register/">
          <MenuButton>Adicionar</MenuButton>
        </Link>

        <MenuButton onClick={() => handleNavegate()}>Editar</MenuButton>

        <MenuButton onClick={() => handleDelete()}>Excluir</MenuButton>
      </Menu>

      <Pets>
        {pets.map(pet => (
          <PetsButton
            selected={pet.id === petSelected}
            onClick={() => setPetSelected(pet.id)}
            key={pet.id}
          >
            <PetsContainer key={pet.id}>
              <img src={picture} alt="pet" />
              <InfoContainer>
                <Bloco>
                  <div>
                    <strong>Nome:</strong>
                    <p>{pet.pet_name}</p>
                  </div>
                  <div>
                    <strong>Idade:</strong>
                    <p>{pet.age}</p>
                  </div>
                </Bloco>
                <Bloco>
                  <div>
                    <strong>Especie:</strong>
                    <p>{pet.specie}</p>
                  </div>
                  <div>
                    <strong>Raça:</strong>
                    <p>{pet.breed}</p>
                  </div>
                </Bloco>
                <Bloco>
                  <div>
                    <strong>Dono:</strong>
                    <p>{pet.owner_name}</p>
                  </div>
                  <div>
                    <strong>Fone:</strong>
                    <p>{pet.phone_number}</p>
                  </div>
                </Bloco>
              </InfoContainer>
            </PetsContainer>
          </PetsButton>
        ))}
      </Pets>
    </>
  );
};

export default PetsList;
