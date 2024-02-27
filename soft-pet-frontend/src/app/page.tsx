'use client'

import { ThemeProvider } from "styled-components";
import PetPage from "./modules/pets/pages";
import theme from "./modules/chore/theme";
import { PetsProvider } from "./modules/chore/hooks/petsProvider";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <PetsProvider>
        <PetPage />
      </PetsProvider>
    </ThemeProvider>
  );
}
