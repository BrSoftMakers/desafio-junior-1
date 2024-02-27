"use client"

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';
import { ICreatedClient, IDeleteClient } from '../types/IClients';

interface ContextProps {
  dataClients: IDeleteClient[];
  setDataClients: Dispatch<SetStateAction<IDeleteClient[]>>;
  filtered: IDeleteClient[];
  setFiltered: Dispatch<SetStateAction<IDeleteClient[]>>;
  textSearch: string,
  setTextSearch: Dispatch<SetStateAction<string>>
  dataFiltered: (text:string) => ICreatedClient[]
}

const GlobalContext = createContext<ContextProps>({
  dataClients: [],
  filtered: [],
  setFiltered: () => {},
  textSearch: '',
  setTextSearch: () => {},
  dataFiltered: (text: string):ICreatedClient[] => [],
  setDataClients: () => {},
});

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [dataClients, setDataClients] = useState<IDeleteClient[]>([]);
  const [filtered, setFiltered] = useState<IDeleteClient[]>([]);
  const [textSearch, setTextSearch] = useState('');
  
  const dataFiltered = (text: string): ICreatedClient[] => {
    return dataClients.filter((client) => client.name.toLowerCase().includes(text.toLowerCase()));
  };

  return (
    <GlobalContext.Provider value={{ dataClients, textSearch, setTextSearch, dataFiltered, setDataClients,filtered, setFiltered}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
