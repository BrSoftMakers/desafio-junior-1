import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import { Card } from './Card';

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
}

export const CardPets = (props: Props) => {
  const { pets } = props;
  const [search, setSearch] = React.useState<string>('');
  const [petsSearch, setPetSearch] = React.useState<PetRegisterInterface[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function searchPetProperty(text: string) {
    if (text === '') {
      setPetSearch([]);
      return;
    }

    const search = pets.filter(element => {
      return (
        element.namePet.toLowerCase().includes(text.toLowerCase()) ||
        element.nameProperty.toLowerCase().includes(text.toLowerCase())
      );
    });

    setPetSearch(search);
    console.log(petsSearch.length);
  }

  React.useEffect(() => {
    searchPetProperty(search);
  }, [search]); //eslint-disable-line

  return (
    <Box>
      <Box
        mb="35px"
        display={{ base: 'block', lg: 'flex' }}
        justifyContent="space-between"
      >
        <Box>
          <Text fontSize="5xl" fontWeight="semibold">
            Lista de Pets
          </Text>
          <Text>
            Confira abaixo a lista de todos os bichinhos que já passaram pelo
            PetLover
          </Text>
        </Box>
        <Box display="flex" alignItems="end" mt={{ base: 4, lg: 0 }}>
          <InputGroup size="md" borderColor="#CBD5E0">
            <Input name="text" value={search} onChange={handleChange} />
            <InputRightElement>
              <IconButton
                bg="primary"
                _hover={{ bg: 'green.200' }}
                aria-label="search pet"
                icon={<SearchIcon />}
                border="1px solid #CBD5E0"
                onClick={() => {
                  searchPetProperty(search);
                }}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>

      <Box>
        {petsSearch.length === 0 && search === '' ? (
          <Card pets={pets} />
        ) : (
          <Card pets={petsSearch} find={true} />
        )}
      </Box>
    </Box>
  );
};
