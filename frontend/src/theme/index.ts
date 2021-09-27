import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: 'hsl(148, 31%, 81%)',
    secondary: 'hsl(263, 81%, 20%)',
    warning: 'hsl(50, 85%, 76%)',
    danger: 'hsl(0, 100%, 74%)',
    background: 'hsl(60, 23%, 95%)',
  },
  components: {
    Text: {
      color: 'hsl(0, 0%, 26%)',
    },
  },
});
