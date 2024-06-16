import { ReactNode, createContext, useContext, useState } from "react";

type StateContextType = {
  token: Token;
  setToken: (token: Token) => void;
};

type Token = string | null;

const StateContext = createContext<StateContextType>({
  token: null,
  setToken: () => {},
});

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const setToken = (token: Token) => {
    if (token) {
      _setToken(token);
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      _setToken(null);
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <StateContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
