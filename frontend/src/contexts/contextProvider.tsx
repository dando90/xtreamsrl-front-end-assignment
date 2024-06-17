import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import CuisineRepository from "../repositories/CuisineRepository";
import DifficultyRepository from "../repositories/DifficultyRepository";
import DietRepository from "../repositories/DietRepository";
import { CuisineAPI } from "../types/cuisine";
import { DietAPI } from "../types/diet";
import { DifficultyAPI } from "../types/difficulty";

type StateContextType = {
  token: Token;
  setToken: (token: Token) => void;
  searchParams: SearchParams;
  setSearchParams: (searchParams: SearchParams) => void;
  filterData: FilterData;
};

interface SearchParams {
  q: string;
  cuisineId: string;
  dietId: string;
  difficultyId: string;
}

interface FilterData {
  cuisines: CuisineAPI[];
  diets: DietAPI[];
  difficulties: DifficultyAPI[];
}

type Token = string | null;

const defaultSearchParamsState = {
  q: "",
  cuisineId: "",
  dietId: "",
  difficultyId: "",
};

const StateContext = createContext<StateContextType>({
  token: null,
  setToken: () => {},
  searchParams: defaultSearchParamsState,
  setSearchParams: () => {},
  filterData: {
    cuisines: [],
    diets: [],
    difficulties: [],
  },
});

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const [searchParams, setSearchParams] = useState(defaultSearchParamsState);

  const [filterData, setFilterData] = useState<FilterData>({
    cuisines: [],
    diets: [],
    difficulties: [],
  });

  useEffect(() => {
    getFilterData();
  }, []);

  const getFilterData = async () => {
    const cuisineRepository = new CuisineRepository();
    const cuisinesResponse = await cuisineRepository.index();
    const difficultyRepository = new DifficultyRepository();
    const difficultiesResponse = await difficultyRepository.index();
    const dietRepository = new DietRepository();
    const dietsResponse = await dietRepository.index();
    setFilterData({
      cuisines: cuisinesResponse.data,
      difficulties: difficultiesResponse.data,
      diets: dietsResponse.data,
    });
  };

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
        filterData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
