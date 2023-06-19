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
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

export const CustomerDetail: React.FC = () => {
  const { customerId = 'new' } = useParams()

  return (
    <Container maxW="container.xl" paddingBottom={4}>
      <Text as="h1" align="center" fontSize="4xl" fontWeight="bold">
        {customerId === 'new' ? 'Novo cliente' : 'Dados de: ${customerName}'}
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

        <FormControl>
          <FormLabel>Nome completo</FormLabel>
          <Input type="email" />
        </FormControl>

        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input type="email" />
        </FormControl>

        <FormControl>
          <FormLabel>Telefone</FormLabel>
          <Input />
        </FormControl>

        <Box position="relative" paddingY="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4" fontWeight="medium">
            Endereço
          </AbsoluteCenter>
        </Box>

        <FormControl>
          <FormLabel>Cep</FormLabel>
          <Input />
        </FormControl>

        <FormControl>
          <FormLabel>Estado</FormLabel>
          <Input />
        </FormControl>

        <FormControl>
          <FormLabel>Cidade</FormLabel>
          <Input />
        </FormControl>

        <FormControl>
          <FormLabel>Rua/Avenida</FormLabel>
          <Input />
        </FormControl>

        <FormControl>
          <FormLabel>Numero</FormLabel>
          <Input />
        </FormControl>

        <Divider />

        <Text>Pets</Text>
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
            Pesquisar novos pets
          </MenuButton>
          <MenuList minWidth="240px" padding={2}>
            <MenuOptionGroup defaultValue="asc" title="Pesquisar" type="radio">
              <Input placeholder="Nome do pet" />
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Resultado">
              <MenuItemOption value="email">Email</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>

        <Divider />

        <Button colorScheme="green">Salvar</Button>
        {customerId !== 'new' && <Button colorScheme="red">Excluir</Button>}
      </Box>
    </Container>
  )
}
