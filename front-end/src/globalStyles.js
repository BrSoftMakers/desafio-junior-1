import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
  }
  html, body{
    font-family: 'Poppins', sans-serif;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;