import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const Logo = () => (
  <Box display="flex" alignItems="center">
    <Image width="40px" height="40px" src="/logo.png" alt="logo" />
    <Box display="flex" ml={1}>
      <Text fontSize="3xl" fontWeight="semibold" color="green.500">
        Pet
      </Text>
      <Text fontSize="3xl" fontWeight="semibold" color="gray.600">
        Lover
      </Text>
    </Box>
  </Box>
);
