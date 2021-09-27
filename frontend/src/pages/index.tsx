import { Box, Container, Spinner } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

import { useLoading } from '../context';
import { getPets } from '../service/petsService';
import { CardPets, Header } from './../components';

import type { NextPage } from 'next';
interface PetRegisterInterface {
  id: number;
  namePet: string;
  agePet: number;
  weightPet: number;
  animalPet: string;
  breedPet: string;
  nameProperty: string;
  telephoneProperty: string;
  emailProperty?: string;
  addressProperty: string;
  districtProperty: string;
  cityProperty: string;
  ufProperty: string;
}

const Home: NextPage = () => {
  const [pets, setPets] = React.useState<PetRegisterInterface[]>([]);
  const { state, changeTrue, changeFalse } = useLoading();

  React.useEffect(() => {
    getPets().then(res => {
      setPets(res);
      changeFalse();
    });

    console.log(pets);
  }, [state]); //eslint-disable-line

  return (
    <div>
      <Head>
        <title>PetLover</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Box height="100vh" bg="background">
        <Header refresh={changeTrue} />
        <Container
          maxWidth="container.lg"
          centerContent
          height="100%"
          pt="90px"
        >
          {state ? (
            <Spinner
              thickness="4px"
              size="xl"
              emptyColor="gray.200"
              color="primary"
            />
          ) : (
            <Box width="100%" pb={12}>
              <CardPets pets={pets} />
            </Box>
          )}
        </Container>
      </Box>
    </div>
  );
};

export default Home;
