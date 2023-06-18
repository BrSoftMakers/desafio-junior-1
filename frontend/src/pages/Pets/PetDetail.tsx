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
import { useParams } from 'react-router-dom'

export const PetDetail: React.FC = () => {
  const { petId = 'new' } = useParams()

  return (
    <Container maxW="container.xl" paddingBottom={3}>
      <Text as="h1" align="center" fontSize="4xl" fontWeight="bold">
        {petId === 'new' ? 'Novo pet' : 'Dados de: ${petName}'}
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
          <Input type="email" />
        </FormControl>

        <FormControl>
          <FormLabel>Idade</FormLabel>
          <Input type="number" />
        </FormControl>

        <FormControl>
          <FormLabel>Tipo</FormLabel>
          <Select placeholder="Selecione um tipo">
            <option value="cat">Gato</option>
            <option value="dog">Cachorro</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Raça</FormLabel>
          <Input />
        </FormControl>

        <Divider />

        <Text>Donos</Text>
        <Box display="flex" flexDirection="row" flexWrap="wrap" gap={2}>
          <ButtonGroup size="sm" isAttached variant="outline">
            <Button variant="solid" colorScheme="orange">
              Luis Eduardo
            </Button>
            <IconButton
              colorScheme="red"
              aria-label="Add to friends"
              icon={<CloseIcon />}
            />
          </ButtonGroup>
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

        <Button colorScheme="green">Salvar</Button>
        {petId !== 'new' && <Button colorScheme="red">Excluir</Button>}
      </Box>
    </Container>
  )
}
