import {
  Container,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

export const CustomersListing: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Text as="h1" fontSize="4xl" fontWeight="bold" textAlign="center">
        Clientes
      </Text>

      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>E-mail</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Luis Eduardo</Td>
              <Td>luis@gmail.com</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}
