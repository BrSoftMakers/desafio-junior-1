import {
  Box,
  Button,
  Center,
  Container,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Progress,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { PetCard } from '../../../components/PetCard/PetCard'
import { useLogicPetsListing } from './useLogicPetsListing'

export const PetsListing: React.FC = () => {
  const navigate = useNavigate()
  const {
    pets,
    isLoading,
    hasNextPage,
    handleDelete,
    setInputSearchFilter,
    setPage,
  } = useLogicPetsListing()

  return (
    <Container maxW="container.xl">
      <Box flex={1}>
        <Text as="h1" fontSize="4xl" fontWeight="bold" textAlign="center">
          Pets
        </Text>

        <InputGroup>
          <Input
            onChange={(e) => (setInputSearchFilter(e.target.value), setPage(1))}
            placeholder="Pesquisar por um pet"
          />
          <InputRightElement>
            <IconButton
              aria-label="add-pet-button"
              colorScheme="green"
              icon={<AddIcon />}
              onClick={() => navigate('/pets/new')}
            />
          </InputRightElement>
        </InputGroup>

        {!isLoading && (
          <Wrap justify="center" spacing="30px" marginTop={10} marginBottom={4}>
            {pets.map((pet) => (
              <WrapItem key={pet.id}>
                <PetCard
                  petName={pet.name}
                  petType={pet.type}
                  onClickButtonSee={() => navigate(`/pets/${pet.id}`)}
                  onClickButtonDelete={() => handleDelete(pet.id!)}
                />
              </WrapItem>
            ))}
          </Wrap>
        )}
      </Box>

      {!isLoading && pets.length > 0 && (
        <Center marginY={10}>
          <Button
            isDisabled={!hasNextPage}
            onClick={() => setPage((oldPage) => oldPage + 1)}
          >
            Mostrar mais
          </Button>
        </Center>
      )}
      {isLoading && <Progress marginY={4} size="xs" isIndeterminate />}
      {!isLoading && pets.length === 0 && (
        <Text align="center">Nenhum registro encontrado</Text>
      )}
    </Container>
  )
}
