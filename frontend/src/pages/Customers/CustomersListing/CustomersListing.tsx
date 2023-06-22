import { AddIcon } from '@chakra-ui/icons'
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
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Progress,
  Link,
  Center,
  Button,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useCustomersListing } from './useLogicCustomersListing'

export const CustomersListing: React.FC = () => {
  const navigate = useNavigate()
  const { customers, hasNextPage, isLoading, setInputSearchFilter, setPage } =
    useCustomersListing()

  return (
    <Container maxW="container.xl">
      <Text as="h1" fontSize="4xl" fontWeight="bold" textAlign="center">
        Clientes
      </Text>

      <InputGroup marginY={4}>
        <Input
          placeholder="Pesquise por um nome de cliente"
          onChange={(e) => (setInputSearchFilter(e.target.value), setPage(1))}
        />
        <InputRightElement>
          <IconButton
            aria-label="add-pet-button"
            colorScheme="green"
            icon={<AddIcon />}
            onClick={() => navigate('/customers/new')}
          />
        </InputRightElement>
      </InputGroup>

      {!isLoading && customers.length === 0 && (
        <Text align="center">Nenhum registro encontrado</Text>
      )}

      {!isLoading && customers.length > 0 && (
        <>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Nome</Th>
                  <Th>E-mail</Th>
                </Tr>
              </Thead>
              <Tbody>
                {customers.map((customer) => (
                  <Tr key={customer.id}>
                    <Td>
                      <Link
                        onClick={() => navigate(`/customers/${customer.id}`)}
                      >
                        {customer.fullName}
                      </Link>
                    </Td>
                    <Td>{customer.email}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>

          <Center marginY={4}>
            <Button
              isDisabled={!hasNextPage}
              onClick={() => setPage((oldPage) => oldPage + 1)}
            >
              Mostrar mais
            </Button>
          </Center>
        </>
      )}
      {isLoading && <Progress size="xs" isIndeterminate />}
    </Container>
  )
}
