import { Box, Text, Collapse } from '@chakra-ui/react';
import Image from 'next/image';

import imgBird from './../../_assets/images/bird.jpg';
import imgCat from './../../_assets/images/cat.jpg';
import imgDog from './../../_assets/images/dog.jpg';
import imgOther from './../../_assets/images/other.jpg';
import { BtnDelete } from './BtnDelete';
import { BtnEdit } from './BtnEdit';

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

interface Props {
  pets: PetRegisterInterface[];
  refresh: () => void;
  find?: boolean;
}

export const Card = (props: Props) => {
  const { pets, refresh, find } = props;

  function imgAnimal(ref: string) {
    if (ref === 'Cachorro') return <Image src={imgDog} alt="dog" />;
    else if (ref === 'Gato') return <Image src={imgCat} alt="dog" />;
    else if (ref === 'Ave') return <Image src={imgBird} alt="dog" />;
    else return <Image width="180px" height="180px" src={imgOther} alt="dog" />;
  }

  return (
    <Box>
      <Collapse in={find}>
        <Text fontSize="xl" mb={3} color="green.600">
          Exibindo os resultados encontrados:
        </Text>
      </Collapse>

      <Collapse in={pets.length === 0}>
        <Box>Nenhum resultado encontrado</Box>
      </Collapse>

      {pets.map(pet => (
        <Box
          key={pet.id}
          mb={3}
          display={{ md: 'block', lg: 'flex' }}
          justifyContent="space-between"
          bg="#ffffff"
          width="100%"
          borderRadius="8px"
          boxShadow="md"
          border="1px solid #CBD5E0"
        >
          <Box
            width={{ md: '100%', lg: '70%' }}
            borderRadius="8"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {imgAnimal(pet.animalPet)}
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems={{ base: 'center', lg: 'start' }}
            width="100%"
            p={3}
          >
            <Text fontSize="2xl">Pet: {pet.namePet}</Text>
            <br />
            <Text>Idade: {pet.agePet} anos</Text>
            <Text>Peso: {pet.weightPet} Kg</Text>
            <Text>Animal: {pet.animalPet}</Text>
            <Text>Raça: {pet.breedPet}</Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="start"
            alignItems={{ base: 'center', lg: 'start' }}
            width="100%"
            p={3}
          >
            <Text fontSize="2xl">Dono: {pet.nameProperty}</Text>
            <br />
            <Text>Telefone: {pet.telephoneProperty}</Text>
            {pet.emailProperty && <Text>Email: {pet.emailProperty}</Text>}
            <Text>Endereço: {pet.addressProperty}</Text>
            <Text>Bairro: {pet.districtProperty}</Text>

            <Text>Cidade: {pet.cityProperty}</Text>
            <Text>UF: {pet.ufProperty}</Text>
          </Box>

          <Box
            display="flex"
            alignItems="end"
            justifyContent="end"
            p={3}
            width={{ base: '100%', lg: '50%' }}
          >
            <BtnEdit pet={pet} refresh={refresh} />
            <BtnDelete id={pet.id} refresh={refresh} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};
