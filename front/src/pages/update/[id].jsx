import Head from 'next/head';
import { useRouter } from 'next/router';
import { Section } from '../../styles/style';

import FormComp from '../../components/Form';
import Navbar from '../../components/Navbar';

export default function Details() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <Head>
        <title>Editar | Pet</title>
        <meta name="Editar" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Section>
        <FormComp edit={router.query.id} />
      </Section>
    </div>
  );
}
