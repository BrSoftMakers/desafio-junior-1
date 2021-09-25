import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import type { NextPage } from 'next';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>PetLover</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <Box height="100vh" bg="background">
        PetLover Page
      </Box>
    </div>
  );
};

export default Home;
