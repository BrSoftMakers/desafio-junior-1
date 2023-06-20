import { ChevronDownIcon, CloseIcon } from '@chakra-ui/icons'
import {
  AbsoluteCenter,
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
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
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import { brasilStates } from '../../../constants/brasilStates'
import { useLogicCustomerDetail } from './useLogicCustomerDetail'
import { formCustomerProps } from './form/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { schemaCustomerForm } from './form/schemaCustomerForm'
import { CustomerServices } from '../../../services/apiPetsAndCustomers/CustomerServices/CustomerServices'

export const CustomerDetail: React.FC = () => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    getValues,
  } = useForm<formCustomerProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaCustomerForm),
  })

  const {
    animals,
    customer,
    customerId,
    isLoading,
    setInputFilterPet,
    handleDelete,
    handlePetAdd,
    handlePetDelete,
    handleSubmitForm,
    setCustomer,
  } = useLogicCustomerDetail()

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
  }, [customerId, reset, setCustomer])

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
          <FormErrorMessage>{errors.fullName?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel>E-mail</FormLabel>
          <Input {...register('email')} type="email" />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.phone}>
          <FormLabel>Telefone</FormLabel>
          <Input
            as={IMaskInput}
            value={getValues('phone')}
            mask="(00) 00000-0000"
            unmask
            onAccept={(value: string) =>
              reset((oldState) => {
                return { ...oldState, phone: value }
              })
            }
          />
        </FormControl>

        <Box position="relative" paddingY="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4" fontWeight="medium">
            Endereço
          </AbsoluteCenter>
        </Box>

        <FormControl isInvalid={!!errors.customerAddress?.zipCode}>
          <FormLabel>Cep</FormLabel>
          <Input
            as={IMaskInput}
            value={getValues('customerAddress.zipCode')}
            mask="00000-000"
            unmask
            onAccept={(value: string) =>
              reset((oldState) => {
                return {
                  ...oldState,
                  customerAddress: {
                    ...oldState.customerAddress,
                    zipCode: value,
                  },
                }
              })
            }
          />
          <FormErrorMessage>
            {errors.customerAddress?.zipCode?.message}
          </FormErrorMessage>
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

          <FormErrorMessage>
            {errors.customerAddress?.state?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.customerAddress?.city}>
          <FormLabel>Cidade</FormLabel>
          <Input {...register('customerAddress.city')} />
          <FormErrorMessage>
            {errors.customerAddress?.city?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.customerAddress?.street}>
          <FormLabel>Rua/Avenida</FormLabel>
          <Input {...register('customerAddress.street')} />
          <FormErrorMessage>
            {errors.customerAddress?.street?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.customerAddress?.number}>
          <FormLabel>Numero</FormLabel>
          <Input {...register('customerAddress.number')} />
          <FormErrorMessage>
            {errors.customerAddress?.number?.message}
          </FormErrorMessage>
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
                  <Button
                    onClick={() => navigate(`/pets/${animal.id!}`)}
                    variant="solid"
                    colorScheme="orange"
                  >
                    {animal.name}
                  </Button>
                  <IconButton
                    onClick={() => handlePetDelete(+customerId, animal.id!)}
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
                      <MenuItem
                        key={animal.id}
                        onClick={() => handlePetAdd(+customerId, animal.id!)}
                      >
                        {animal.name}
                      </MenuItem>
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
