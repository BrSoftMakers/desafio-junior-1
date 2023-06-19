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
import { useEffect, useState, useCallback } from 'react'
import { PetCard } from '../../components/PetCard/PetCard'
import { IPet } from '../../services/apiPetsAndCustomers/types'
import { PetService } from '../../services/apiPetsAndCustomers/PetServices/PetServices'
import { useNavigate } from 'react-router-dom'
import { AddIcon } from '@chakra-ui/icons'
import { useDebounce } from '../../hooks/useDebounce'

export const PetsListing: React.FC = () => {
  const navigate = useNavigate()
  const { debounce } = useDebounce(1000)

  const [pets, setPets] = useState<Omit<IPet, 'customers'>[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsloading] = useState(true)
  const [inputSearchFilter, setInputSearchFilter] = useState('')
  const [hasNextPage, setHasNextPage] = useState(true)

  const verifyHasNextPage = useCallback(() => {
    PetService.getAllPets(page + 1, 10, inputSearchFilter).then((data) => {
      if (data.length === 0) {
        setHasNextPage(false)
        return
      }
      setHasNextPage(true)
      return
    })
  }, [page, inputSearchFilter])

  const handleDelete = (petId: number) => {
    PetService.deletePet(petId).then(() => {
      setPets((oldPets) => oldPets.filter((pet) => pet.id !== petId))
    })
  }

  useEffect(() => {
    let ignore = false
    setIsloading(true)
    debounce(() => {
      PetService.getAllPets(page, 10, inputSearchFilter).then((pets) => {
        if (!ignore) {
          if (inputSearchFilter === '') {
            setPets((oldState) => {
              const newState = [...oldState, ...pets]
              const arrayFiltred = newState.filter((obj, idx) => {
                return newState.findIndex((item) => item.id === obj.id) === idx
              })
              return arrayFiltred
            })
          } else {
            setPets(() => {
              const newState = [...pets]
              const arrayFiltred = newState.filter((obj, idx) => {
                return newState.findIndex((item) => item.id === obj.id) === idx
              })
              return arrayFiltred
            })
          }
          verifyHasNextPage()
          setIsloading(false)
        }
      })
    })

    return () => {
      ignore = true
    }
  }, [page, inputSearchFilter, verifyHasNextPage, debounce])

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
