import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';

import { ContextProvider } from '../context';
import { theme } from '../theme';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </ChakraProvider>
  );
}
export default MyApp;
