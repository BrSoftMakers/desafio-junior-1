import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../theme';

import type { AppProps } from 'next/app';
import { ContextProvider } from '../context';
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
