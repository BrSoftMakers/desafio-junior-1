// CSS
import { GlobalStyles } from "./styles/global-styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>oi</h1>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
