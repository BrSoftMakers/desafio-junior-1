import { Box, Container, Spinner } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';

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
  const [loading, setLoading] = React.useState(true);

  function Refresh() {
    setLoading(true);
  }

  React.useEffect(() => {
    getPets().then(res => {
      setPets(res);
      setLoading(false);
    });
  }, [loading]);

  return (
    <div>
      <Head>
        <title>PetLover</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Box height="100vh" bg="background">
        <Header refresh={Refresh} />
        <Container
          maxWidth="container.lg"
          centerContent
          height="100%"
          pt="90px"
        >
          {loading ? (
            <Spinner
              thickness="4px"
              size="xl"
              emptyColor="gray.200"
              color="primary"
            />
          ) : (
            <Box width="100%" pb={12}>
              <CardPets pets={pets} refresh={Refresh} />
            </Box>
          )}
        </Container>
      </Box>
    </div>
  );
};

export default Home;
