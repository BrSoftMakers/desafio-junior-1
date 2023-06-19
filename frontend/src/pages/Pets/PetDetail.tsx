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
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Select,
  Text,
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { z } from 'zod'
import { IPet } from '../../services/apiPetsAndCustomers/types'
import { PetService } from '../../services/apiPetsAndCustomers/PetServices/PetServices'

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

        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            colorScheme="gray"
            rightIcon={<ChevronDownIcon />}
          >
            Pesquisar novos donos
          </MenuButton>
          <MenuList minWidth="240px" padding={2}>
            <MenuOptionGroup defaultValue="asc" title="Pesquisar" type="radio">
              <Input placeholder="Nome do cliente/dono" />
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Resultado">
              <MenuItemOption value="email">Email</MenuItemOption>
            </MenuOptionGroup>
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
