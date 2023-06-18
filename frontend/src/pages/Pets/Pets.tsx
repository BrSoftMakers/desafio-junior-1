import {
  Box,
  Button,
  Card,
  CardFooter,
  Center,
  Container,
  Divider,
  Image,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { PetCard } from '../../components/PetCard/PetCard'

export const Pets: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Box flex={1}>
        <Text as="h1" fontSize="4xl" fontWeight="bold" textAlign="center">
          Pets
        </Text>

        <Wrap justify="center" spacing="30px" marginTop={10} marginBottom={4}>
          <WrapItem>
            <PetCard
              petName="teo"
              petType="cat"
              onClickButtonCard={() => console.log('clicou')}
            />
          </WrapItem>
        </Wrap>
      </Box>

      <Center marginY={10}>
        <Button>Mostrar mais</Button>
      </Center>
    </Container>
  )
}
