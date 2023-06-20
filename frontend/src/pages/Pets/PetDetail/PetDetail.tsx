import { CloseIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {
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
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { PetService } from '../../../services/apiPetsAndCustomers/PetServices/PetServices'
import { formPetProps } from './form/types'
import { schemaPetForm } from './form/schemaPetForm'
import { useLogicPetDetail } from './useLogicPetDetail'

export const PetDetail: React.FC = () => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<formPetProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaPetForm),
  })

  const {
    petId,
    customers,
    isLoading,
    petData,
    setPetData,
    handleAddCustomer,
    handleDeleteCustomer,
    setInputFilterCustomer,
    handleSubmitFormPet,
  } = useLogicPetDetail()

  useEffect(() => {
    if (petId !== 'new') {
      PetService.getPet(+petId).then((pet) => {
        setPetData(pet)
        reset({
          age: pet.age,
          name: pet.name,
          race: pet.race,
          type: pet.type as 'cat' | 'dog',
        })
      })
    }
  }, [petId, reset, setPetData])

  return (
    <Container maxW="container.xl" paddingBottom={3}>
      <Text as="h1" align="center" fontSize="4xl" fontWeight="bold">
        {petId === 'new' ? 'Novo pet' : `Dados de: ${petData?.name}`}
      </Text>

      <Box
        maxW="sm"
        display="flex"
        flexDirection="column"
        margin="0 auto"
        gap={4}
      >
        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Nome</FormLabel>
          <Input {...register('name')} type="email" />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.age}>
          <FormLabel>Idade</FormLabel>
          <Input {...register('age', { valueAsNumber: true })} type="number" />
          <FormErrorMessage>{errors.age?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.type}>
          <FormLabel>Tipo</FormLabel>
          <Select {...register('type')} placeholder="Selecione um tipo">
            <option value="cat">Gato</option>
            <option value="dog">Cachorro</option>
          </Select>
          <FormErrorMessage>{errors.type?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.race}>
          <FormLabel>Raça</FormLabel>
          <Input {...register('race')} />
          <FormErrorMessage>{errors.race?.message}</FormErrorMessage>
        </FormControl>

        {petId !== 'new' && (
          <>
            <Divider />

            <Text>Donos</Text>
            <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
              {petData?.customers.map((customer) => (
                <ButtonGroup
                  key={customer.id}
                  size="sm"
                  isAttached
                  variant="outline"
                >
                  <Button
                    onClick={() => navigate(`/customers/${customer.id}`)}
                    variant="solid"
                    colorScheme="orange"
                  >
                    {customer.fullName}
                  </Button>
                  <IconButton
                    onClick={() => handleDeleteCustomer(customer.id, +petId)}
                    colorScheme="red"
                    aria-label="add customer to pet"
                    icon={<CloseIcon />}
                  />
                </ButtonGroup>
              ))}
            </Box>

            <Menu onClose={() => setInputFilterCustomer('')}>
              <MenuButton
                as={Button}
                colorScheme="gray"
                rightIcon={<ChevronDownIcon />}
              >
                Pesquisar novos donos
              </MenuButton>
              <MenuList minWidth="240px" padding={2}>
                <Text fontWeight="medium">Pesquisar</Text>
                <Input
                  placeholder="Nome do cliente/dono"
                  onChange={(e) => setInputFilterCustomer(e.target.value)}
                />
                <MenuDivider />
                <MenuList border="none" boxShadow="none">
                  {isLoading && <Progress isIndeterminate />}
                  {!isLoading &&
                    customers.map((customer) => (
                      <MenuItem
                        key={customer.id}
                        onClick={() => handleAddCustomer(customer.id, +petId)}
                      >
                        {customer.fullName}
                      </MenuItem>
                    ))}
                </MenuList>
              </MenuList>
            </Menu>

            <Divider />
          </>
        )}

        <Button colorScheme="green" onClick={handleSubmit(handleSubmitFormPet)}>
          Salvar
        </Button>
        {petId !== 'new' && <Button colorScheme="red">Excluir</Button>}
      </Box>
    </Container>
  )
}
