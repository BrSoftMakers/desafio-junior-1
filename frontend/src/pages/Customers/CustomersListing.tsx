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
import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ICustomer } from '../../services/apiPetsAndCustomers/types'
import { CustomerServices } from '../../services/apiPetsAndCustomers/CustomerServices/CustomerServices'
import { useDebounce } from '../../hooks/useDebounce'

export const CustomersListing: React.FC = () => {
  const navigate = useNavigate()
  const { debounce } = useDebounce(1000)
  const [customers, setCustomers] = useState<
    Omit<ICustomer, 'customerAddress'>[]
  >([])
  const [isLoading, setIsloading] = useState(true)
  const [inputSearchFilter, setInputSearchFilter] = useState('')
  const [hasNextPage, setHasNextPage] = useState(true)
  const [page, setPage] = useState(1)

  const verifyHasNextPage = useCallback(() => {
    CustomerServices.getAllCustomers(page + 1, 10, inputSearchFilter).then(
      (data) => {
        if (data.length === 0) {
          setHasNextPage(false)
          return
        }
        setHasNextPage(true)
        return
      }
    )
  }, [page, inputSearchFilter])

  useEffect(() => {
    let ignore = false
    setIsloading(true)
    debounce(() => {
      CustomerServices.getAllCustomers(page, 10, inputSearchFilter)
        .then((customers) => {
          if (!ignore) {
            if (inputSearchFilter === '') {
              setCustomers((oldState) => {
                const newState = [...oldState, ...customers]
                const arrayFiltred = newState.filter((obj, idx) => {
                  return (
                    newState.findIndex((item) => item.id === obj.id) === idx
                  )
                })
                return arrayFiltred
              })
            } else {
              setCustomers(() => {
                const newState = [...customers]
                const arrayFiltred = newState.filter((obj, idx) => {
                  return (
                    newState.findIndex((item) => item.id === obj.id) === idx
                  )
                })
                return arrayFiltred
              })
            }
            verifyHasNextPage()
            setIsloading(false)
          }
        })
        .finally(() => setIsloading(false))
    })

    return () => {
      ignore = true
    }
  }, [page, inputSearchFilter, debounce, verifyHasNextPage])

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

      {isLoading && <Progress size="xs" isIndeterminate />}

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
    </Container>
  )
}
