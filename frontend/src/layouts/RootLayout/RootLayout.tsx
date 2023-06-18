import { Outlet } from 'react-router-dom'
import { NavBar } from '../../components/NavBar/NavBar'
import { Box, Container } from '@chakra-ui/react'

export const RootLayout: React.FC = () => {
  return (
    <Box
      width="full"
      height="100vh"
      display="flex"
      flexDirection="column"
      backgroundColor="orange.50"
    >
      <NavBar />
      <Box
        margin={4}
        shadow="md"
        maxW="full"
        maxH="full"
        flex={1}
        rounded={4}
        backgroundColor="white"
      >
        <Container maxW="container.xl">
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}
