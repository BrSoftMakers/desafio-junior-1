import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const NavBar: React.FC = () => {
  const navigate = useNavigate()
  const [isLargerThan500] = useMediaQuery('(max-width: 500px)')

  return (
    <Box backgroundColor="#EDF2F7">
      <Container maxW="container.xl" as="header">
        <HStack justifyContent="space-between" padding={4}>
          <HStack onClick={() => navigate('/pets')} cursor="pointer">
            <Image src="/images/pets.png" width={10} />
            <Text fontSize="3xl" fontWeight="bold">
              PetMania
            </Text>
          </HStack>
          {!isLargerThan500 && (
            <HStack>
              <ButtonGroup isAttached>
                <Button
                  onClick={() => navigate('/pets')}
                  variant="outline"
                  colorScheme="yellow"
                >
                  Pets
                </Button>
                <Button
                  onClick={() => navigate('/customers')}
                  variant="outline"
                  colorScheme="yellow"
                >
                  Clientes
                </Button>
              </ButtonGroup>
            </HStack>
          )}

          {isLargerThan500 && (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="solid"
                colorScheme="blue"
              />
              <MenuList>
                <MenuItem onClick={() => navigate('/pets')}>Pets</MenuItem>
                <MenuItem onClick={() => navigate('/customers')} isFocusable>
                  Clientes
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </HStack>
      </Container>
    </Box>
  )
}
