import Head from 'next/head';

import FormComp from '../components/Form';
import Navbar from '../components/Navbar';
import { Section } from '../styles/style';

export default function Create() {
  return (
    <div>
      <Head>
        <title>Adicionar | Pet</title>
        <meta name="Adicionar" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <Section>
        <FormComp />
      </Section>
    </div>
  );
}
