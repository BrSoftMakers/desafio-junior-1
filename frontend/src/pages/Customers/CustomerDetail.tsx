import { ChevronDownIcon, CloseIcon } from '@chakra-ui/icons'
import {
  AbsoluteCenter,
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Progress,
  Select,
  Text,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { z } from 'zod'
import { CustomerServices } from '../../services/apiPetsAndCustomers/CustomerServices/CustomerServices'
import { ICustomer, IPet } from '../../services/apiPetsAndCustomers/types'
import { brasilStates } from '../../constants/brasilStates'
import { useDebounce } from '../../hooks/useDebounce'
import { PetService } from '../../services/apiPetsAndCustomers/PetServices/PetServices'

const schemaCustomerForm = z.object({
  fullName: z.string().min(3).max(50),
  email: z.string().email(),
  phone: z.string(),
  customerAddress: z.object({
    zipCode: z.string(),
    street: z.string(),
    number: z.string(),
    state: z.string(),
    city: z.string(),
  }),
})

type formCustomerProps = z.infer<typeof schemaCustomerForm>

export const CustomerDetail: React.FC = () => {
  const navigate = useNavigate()
  const { debounce } = useDebounce(1000)
  const { customerId = 'new' } = useParams()
  const [customer, setCustomer] = useState<ICustomer>()
  const [isLoading, setIsloading] = useState(false)
  const [inputFilterPet, setInputFilterPet] = useState('')
  const [animals, setAnimals] = useState<Omit<IPet, 'customers'>[]>([])

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<formCustomerProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaCustomerForm),
    defaultValues: {},
  })

  const handleSubmitForm = (formData: formCustomerProps) => {
    if (customerId === 'new') {
      CustomerServices.createCustomer(formData).then((customerId) => {
        navigate(`/customers/${customerId}`)
      })
      return
    }

    CustomerServices.updateCustomer(+customerId, formData)
  }

  const handleDelete = (customerId: number) => {
    CustomerServices.deleteCustomer(customerId).then(() => {
      alert('Cliente deletado')
      navigate('/customers')
    })
  }

  useEffect(() => {
    if (customerId !== 'new') {
      CustomerServices.getCustomer(+customerId).then((customer) => {
        setCustomer(customer)
        reset({
          customerAddress: {
            state: customer.customerAddress?.state,
          },
          ...customer,
        })
      })
    }
  }, [customerId, reset])

  useEffect(() => {
    setIsloading(true)
    debounce(() => {
      PetService.getAllPets(1, 5, inputFilterPet)
        .then((customers) => {
          setAnimals(customers)
          setIsloading(false)
        })
        .finally(() => setIsloading(false))
    })
  }, [inputFilterPet, debounce])

  return (
    <Container maxW="container.xl" paddingBottom={4}>
      <Text as="h1" align="center" fontSize="4xl" fontWeight="bold">
        {customerId === 'new'
          ? 'Novo cliente'
          : `Dados de: ${customer?.fullName}`}
      </Text>

      <Box
        maxW="sm"
        display="flex"
        flexDirection="column"
        margin="0 auto"
        gap={4}
      >
        <Box position="relative" paddingY="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4" fontWeight="medium">
            Dados pessoais
          </AbsoluteCenter>
        </Box>

        <FormControl isInvalid={!!errors.fullName}>
          <FormLabel>Nome completo</FormLabel>
          <Input {...register('fullName')} type="email" />
        </FormControl>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel>E-mail</FormLabel>
          <Input {...register('email')} type="email" />
        </FormControl>

        <FormControl isInvalid={!!errors.phone}>
          <FormLabel>Telefone</FormLabel>
          <Input {...register('phone')} type="number" />
        </FormControl>

        <Box position="relative" paddingY="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4" fontWeight="medium">
            Endereço
          </AbsoluteCenter>
        </Box>

        <FormControl isInvalid={!!errors.customerAddress?.zipCode}>
          <FormLabel>Cep</FormLabel>
          <Input {...register('customerAddress.zipCode')} />
        </FormControl>

        <FormControl isInvalid={!!errors.customerAddress?.state}>
          <FormLabel>Estado</FormLabel>
          <Select
            placeholder="Selecione um estado"
            {...register('customerAddress.state')}
          >
            {brasilStates.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </Select>
        </FormControl>

        <FormControl isInvalid={!!errors.customerAddress?.city}>
          <FormLabel>Cidade</FormLabel>
          <Input {...register('customerAddress.city')} />
        </FormControl>

        <FormControl isInvalid={!!errors.customerAddress?.street}>
          <FormLabel>Rua/Avenida</FormLabel>
          <Input {...register('customerAddress.street')} />
        </FormControl>

        <FormControl isInvalid={!!errors.customerAddress?.number}>
          <FormLabel>Numero</FormLabel>
          <Input {...register('customerAddress.number')} />
        </FormControl>

        {customerId !== 'new' && (
          <>
            <Divider />
            <Text>Pets</Text>
            <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
              {customer?.animals?.map((animal) => (
                <ButtonGroup
                  key={animal.id}
                  size="sm"
                  isAttached
                  variant="outline"
                >
                  <Button variant="solid" colorScheme="orange">
                    {animal.name}
                  </Button>
                  <IconButton
                    colorScheme="red"
                    aria-label="Add to friends"
                    icon={<CloseIcon />}
                  />
                </ButtonGroup>
              ))}
            </Box>

            <Menu onClose={() => setInputFilterPet('')}>
              <MenuButton
                as={Button}
                colorScheme="gray"
                rightIcon={<ChevronDownIcon />}
              >
                Pesquisar novos pets
              </MenuButton>
              <MenuList minWidth="240px" padding={2}>
                <Text fontWeight="medium">Pesquisar</Text>
                <Input
                  placeholder="Nome do pet"
                  onChange={(e) => setInputFilterPet(e.target.value)}
                />
                <MenuDivider />
                <MenuList border="none" boxShadow="none">
                  {isLoading && <Progress isIndeterminate />}
                  {!isLoading &&
                    animals.map((animal) => (
                      <MenuItem key={animal.id}>{animal.name}</MenuItem>
                    ))}
                </MenuList>
              </MenuList>
            </Menu>

            <Divider />
          </>
        )}

        <Button colorScheme="green" onClick={handleSubmit(handleSubmitForm)}>
          Salvar
        </Button>
        {customerId !== 'new' && (
          <Button colorScheme="red" onClick={() => handleDelete(+customerId)}>
            Excluir
          </Button>
        )}
      </Box>
    </Container>
  )
}
