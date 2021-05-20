import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--color-secondary);
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  :root {
  --color-primary: #f1c21d;
  --color-secondary: #3b3a35;
  --color-others: #1b1b1b;
  --color-error: tomato;
}

  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
