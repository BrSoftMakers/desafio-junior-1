import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { 
  PetsContainer,
  Title,
  PetsContent,
  NoPets
  } from './style';
import PetCard from '../../components/PetCard';

const Pets = () => {
  const [petsData, setPetsData] = useState([]);

  useEffect(() => {
    async function loadPets(){
      await api.get(`/pet`)
        .then(response => {
          setPetsData(response.data);
        })
    }

    loadPets();
  }, [petsData])

  return (
    <>
      <PetsContainer id="petsPage">
        <Title>Pets</Title>
        <PetsContent>
          {
            petsData.length > 0 ? (
              petsData.map((pet, key) => (
                <PetCard data={pet} key={key} />
              ))
            ) : (
              <NoPets>Nenhum pet cadastrado! 😥</NoPets>
            )
          }
        </PetsContent>
      </PetsContainer>
    </>
  );
}

export default Pets;
