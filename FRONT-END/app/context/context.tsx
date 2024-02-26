"use client";

import { ReactNode, createContext, useState } from "react";

interface ContextProvider {
  children: ReactNode;
}
interface ContextProps {
  visible: boolean;
  changeVisible: () => void;
  descVisible: boolean;
  changeDescVisible: () => void;
}

export const Context = createContext({} as ContextProps);

function ContextProvider({ children }: ContextProvider) {
  const [visible, setVisible] = useState(false);
  const [descVisible, setDescVisible] = useState(false);

  function changeVisible() {
    if (visible === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }
  function changeDescVisible() {
    if (descVisible === false) {
      setDescVisible(true);
    } else {
      setDescVisible(false);
    }
  }

  return (
    <Context.Provider
      value={{ visible, changeVisible, descVisible, changeDescVisible }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
