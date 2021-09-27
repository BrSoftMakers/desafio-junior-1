import React, { useContext } from 'react';

type ContextType = {
  state: boolean | undefined;
  changeTrue: () => void | undefined;
  changeFalse: () => void | undefined;
};

interface Props {
  children: React.ReactNode;
}

const Context = React.createContext({} as ContextType);

export const ContextProvider = (props: Props) => {
  const { children } = props;
  const [state, setState] = React.useState<boolean>(true);

  function changeTrue() {
    setState(true);
  }

  function changeFalse() {
    setState(false);
  }

  return (
    <Context.Provider value={{ state, changeTrue, changeFalse }}>
      {children}
    </Context.Provider>
  );
};

export const useLoading = () => {
  const { state, changeTrue, changeFalse } = useContext(Context);
  return { state, changeTrue, changeFalse };
};
