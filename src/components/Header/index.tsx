import { Box, Container, Button } from '@chakra-ui/react';
import { Logo } from '..';

export const Header = () => (
  <Box
    borderBottom="1px solid hsl(0, 0%, 78%)"
    width="100%"
    position="fixed"
    zIndex={2}
    boxShadow="md"
  >
    <Container
      maxWidth="container.lg"
      p={3}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Logo />
      <Button
        bg="primary"
        _hover={{ bg: 'green.200' }}
        _active={{ bg: 'green.300' }}
      >
        Cadastrar pet
      </Button>
    </Container>
  </Box>
);
