'use client'

import { ThemeProvider } from "styled-components";
import PetPage from "./modules/pets/pages";
import theme from "./modules/chore/theme";
import { PetsProvider } from "./modules/chore/hooks/petsProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { NotifyContainer } from "./modules/chore/components/notify";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <NotifyContainer />
      <PetsProvider>
        <PetPage />
      </PetsProvider>
    </ThemeProvider>
  );
}
