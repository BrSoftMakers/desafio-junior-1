import { Box, Container } from '@chakra-ui/react';

import { Logo, Registration } from '..';

interface Props {
  refresh: () => void;
}

export const Header = (props: Props) => {
  const { refresh } = props;

  return (
    <Box
      borderBottom="1px solid hsl(0, 0%, 78%)"
      width="100%"
      position="fixed"
      zIndex={10}
      boxShadow="md"
      bg="hsl(60, 23%, 95%)"
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
