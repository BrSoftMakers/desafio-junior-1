import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import colors from './colors';

import Home from './screens/Home';
import Header from './components/Header';
import Pets from './screens/Pets';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={colors}>
      <GlobalStyle/>
      <Home />
      <Pets />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
