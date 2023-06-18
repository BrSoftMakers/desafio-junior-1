import { Box, Button, Container, HStack, Image, Text } from '@chakra-ui/react'

export const NavBar: React.FC = () => {
  return (
    <Box backgroundColor="#EDF2F7">
      <Container maxW="container.xl" as="header">
        <HStack justifyContent="space-between" padding={4}>
          <HStack>
            <Image src="/images/pets.png" width={10} />
            <Text fontSize="3xl" fontWeight="bold">
              PetMania
            </Text>
          </HStack>
          <HStack>
            <Button colorScheme="blue">Pets</Button>
            <Button colorScheme="blue">Clientes</Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  )
}
