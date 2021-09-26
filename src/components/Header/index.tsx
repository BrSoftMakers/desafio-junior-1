import { Box, Container } from '@chakra-ui/react';

import { Logo, Registration } from '..';

export const Header = () => {
  return (
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
        <Registration />
      </Container>
    </Box>
  );
};
