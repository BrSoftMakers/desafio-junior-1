import { CloseIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {
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
import { ICustomer, IPet } from '../../services/apiPetsAndCustomers/types'
import { PetService } from '../../services/apiPetsAndCustomers/PetServices/PetServices'
import { CustomerServices } from '../../services/apiPetsAndCustomers/CustomerServices/CustomerServices'
import { useDebounce } from '../../hooks/useDebounce'

const schemaPetForm = z.object({
  name: z.string().min(3).max(50),
  age: z.number().int(),
  type: z.enum(['cat', 'dog']),
  race: z.string().min(3).max(50),
})

type formPetProps = z.infer<typeof schemaPetForm>

export const PetDetail: React.FC = () => {
  const navigate = useNavigate()
  const { petId = 'new' } = useParams()
  const [petData, setPetData] = useState<IPet>()
  const [inputFilterCustomer, setInputFilterCustomer] = useState('')
  const [customers, setCustomers] = useState<
    Omit<ICustomer, 'customerAddress'>[]
  >([])
  const [isLoading, setIsloading] = useState(false)
  const { debounce } = useDebounce(1000)

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<formPetProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaPetForm),
    defaultValues: {
      age: undefined,
      name: '',
      race: '',
      type: undefined,
    },
  })

  const handleForm = (formData: formPetProps) => {
    if (petId === 'new') {
      PetService.createPet(formData).then((petId) => {
        navigate(`/pets/${petId}`)
      })
      return
    }

    PetService.updatePet(+petId, formData)
  }

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
  }, [petId, reset])

  useEffect(() => {
    setIsloading(true)
    debounce(() => {
      CustomerServices.getAllCustomers(1, 5, inputFilterCustomer)
        .then((customers) => {
          setCustomers(customers)
          setIsloading(false)
        })
        .finally(() => setIsloading(false))
    })
  }, [inputFilterCustomer, debounce])

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
        <FormControl>
          <FormLabel>Nome</FormLabel>
          <Input {...register('name')} type="email" />
        </FormControl>

        <FormControl>
          <FormLabel>Idade</FormLabel>
          <Input {...register('age', { valueAsNumber: true })} type="number" />
        </FormControl>

        <FormControl>
          <FormLabel>Tipo</FormLabel>
          <Select {...register('type')} placeholder="Selecione um tipo">
            <option value="cat">Gato</option>
            <option value="dog">Cachorro</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Raça</FormLabel>
          <Input {...register('race')} />
        </FormControl>

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
              <Button variant="solid" colorScheme="orange">
                {customer.fullName}
              </Button>
              <IconButton
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
                  <MenuItem key={customer.id}>{customer.fullName}</MenuItem>
                ))}
            </MenuList>
          </MenuList>
        </Menu>

        <Divider />

        <Button colorScheme="green" onClick={handleSubmit(handleForm)}>
          Salvar
        </Button>
        {petId !== 'new' && <Button colorScheme="red">Excluir</Button>}
      </Box>
    </Container>
  )
}
