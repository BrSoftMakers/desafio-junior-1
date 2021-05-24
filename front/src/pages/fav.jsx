import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

import { favout } from '../store/modules/fav/actions';
import Card from '../components/Card';
import { Main } from '../styles';
import Navbar from '../components/Navbar';

export default function Fav() {
  const fave = useSelector(state => state.fav);
  const dispatch = useDispatch();

  function remove(item) {
    dispatch(favout(item));
    console.log(item);
  }

  return (
    <div>
      <Head>
        <title>Favoritos | Pet</title>
        <meta name="Favoritos" content="Clientes Favoritos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main>
        {fave.map(pet => (
          <Card
            favPag
            key={pet.id}
            img={pet.img}
            name={pet.name}
            specie={pet.specie}
            breed={pet.breed}
            removeFav={() => remove(pet)}
          />
        ))}
      </Main>
    </div>
  );
}
