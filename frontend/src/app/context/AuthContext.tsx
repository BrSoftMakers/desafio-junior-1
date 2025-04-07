"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { RegisterProps } from "../interfaces";

type AuthContextType = {
  petsList: Array<RegisterProps> | null;
  setPetsList: React.Dispatch<React.SetStateAction<Array<RegisterProps> | null>>;
  aux: boolean;
  setAux: React.Dispatch<React.SetStateAction<boolean>>;
  filteredPets: Array<RegisterProps> | null;
  setFilteredPets: React.Dispatch<React.SetStateAction<Array<RegisterProps> | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [petsList, setPetsList] = useState<Array<RegisterProps> | null>(null);
  const [filteredPets, setFilteredPets] = useState<Array<RegisterProps> | null>(petsList); 
  const [aux, setAux] = useState<boolean>(true);
  
  return (
    <AuthContext.Provider value={{ petsList, setPetsList, aux, setAux, filteredPets, setFilteredPets }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return context;
};
