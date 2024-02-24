'use client'

import { ThemeProvider } from "styled-components";
import PetPage from "./modules/pets/pages";
import theme from "./modules/chore/theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <PetPage />
    </ThemeProvider>
  );
}
