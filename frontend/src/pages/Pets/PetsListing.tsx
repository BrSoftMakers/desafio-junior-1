import {
  Box,
  Button,
  Center,
  Container,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { PetCard } from '../../components/PetCard/PetCard'
import { IPet } from '../../services/apiPetsAndCustomers/types'
import { PetService } from '../../services/apiPetsAndCustomers/PetServices/PetServices'

export const PetsListing: React.FC = () => {
  const [pets, setPets] = useState<Omit<IPet, 'customers'>[]>([])

  useEffect(() => {
    PetService.getAllPets(1, 10).then((data) => {
      setPets(data)
    })
  }, [])

  return (
    <Container maxW="container.xl">
      <Box flex={1}>
        <Text as="h1" fontSize="4xl" fontWeight="bold" textAlign="center">
          Pets
        </Text>

        <Wrap justify="center" spacing="30px" marginTop={10} marginBottom={4}>
          <WrapItem>
            {pets.map((pet) => (
              <PetCard
                petName={pet.name}
                petType={pet.type}
                onClickButtonSee={() => console.log('clicou')}
                onClickButtonDelete={() => console.log('clicou')}
              />
            ))}
          </WrapItem>
        </Wrap>
      </Box>

      <Center marginY={10}>
        <Button>Mostrar mais</Button>
      </Center>
    </Container>
  )
}
