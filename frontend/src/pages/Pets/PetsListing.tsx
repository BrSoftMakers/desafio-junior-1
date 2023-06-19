import {
  Box,
  Button,
  Center,
  Container,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { useEffect, useState, useCallback } from 'react'
import { PetCard } from '../../components/PetCard/PetCard'
import { IPet } from '../../services/apiPetsAndCustomers/types'
import { PetService } from '../../services/apiPetsAndCustomers/PetServices/PetServices'
import { useNavigate } from 'react-router-dom'
import { AddIcon } from '@chakra-ui/icons'

export const PetsListing: React.FC = () => {
  const navigate = useNavigate()

  const [pets, setPets] = useState<Omit<IPet, 'customers'>[]>([])
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)

  const verifyHasNextPage = useCallback(() => {
    PetService.getAllPets(page + 1, 10).then((data) => {
      if (data.length === 0) {
        setHasNextPage(false)
        return
      }
      setHasNextPage(true)
      return
    })
  }, [page])

  const handleDelete = (petId: number) => {
    PetService.deletePet(petId).then(() => {
      setPets((oldPets) => oldPets.filter((pet) => pet.id !== petId))
    })
  }

  useEffect(() => {
    PetService.getAllPets(page, 10).then((data) => {
      setPets(data)
      verifyHasNextPage()
    })
  }, [page, verifyHasNextPage])

  return (
    <Container maxW="container.xl">
      <Box flex={1}>
        <Text as="h1" fontSize="4xl" fontWeight="bold" textAlign="center">
          Pets
        </Text>

        <InputGroup>
          <Input placeholder="Pesquisar por um pet" />
          <InputRightElement>
            <IconButton
              aria-label="add-pet-button"
              colorScheme="green"
              icon={<AddIcon />}
              onClick={() => navigate('/pets/new')}
            />
          </InputRightElement>
        </InputGroup>

        <Wrap justify="center" spacing="30px" marginTop={10} marginBottom={4}>
          <WrapItem>
            {pets.map((pet) => (
              <PetCard
                key={pet.id}
                petName={pet.name}
                petType={pet.type}
                onClickButtonSee={() => navigate(`/pets/${pet.id}`)}
                onClickButtonDelete={() => handleDelete(pet.id)}
              />
            ))}
          </WrapItem>
        </Wrap>
      </Box>

      <Center marginY={10}>
        <Button
          isDisabled={!hasNextPage}
          onClick={() => setPage((oldPage) => oldPage + 1)}
        >
          Mostrar mais
        </Button>
      </Center>
    </Container>
  )
}
