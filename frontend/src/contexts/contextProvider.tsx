import { ReactNode, createContext, useContext, useState } from "react";

type StateContextType = {
  token: Token;
  setToken: (token: Token) => void;
  searchParams: SearchParams;
  setSearchParams: (searchParams: SearchParams) => void;
};

interface SearchParams {
  text: string;
  cuisineId: string;
  dietId: string;
  difficultyId: string;
}

type Token = string | null;

const defaultSearchParamsState = {
  text: "",
  cuisineId: "",
  dietId: "",
  difficultyId: "",
};

const StateContext = createContext<StateContextType>({
  token: null,
  setToken: () => {},
  searchParams: defaultSearchParamsState,
  setSearchParams: () => {},
});

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const [searchParams, setSearchParams] = useState(defaultSearchParamsState);

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
        searchParams,
        setSearchParams,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
