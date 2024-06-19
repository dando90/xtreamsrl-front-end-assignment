import { useEffect, useState } from "react";
import { useStateContext } from "../contexts/contextProvider";
import RecipeRepository from "../repositories/RecipeRepository";
import { RecipeAPIGet } from "../types/recipe";
import RecipeList from "../components/RecipeList";
import PageNavigation from "../components/PageNavigation";
import LoadingPage from "./LoadingPage";
import SearchFilterBar from "../components/SearchFilterBar";

const RecipeListPage: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeAPIGet[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState<number>(0);
  const { searchParams } = useStateContext();

  useEffect(() => {
    getRecipes();
  }, [page, searchParams]);

  const getRecipes = async () => {
    setLoading(true);
    const recipeRepository = new RecipeRepository();
    const recipeList = await recipeRepository.index(
      page,
      ["cuisine", "diet", "difficulty"],
      ["comments"],
      searchParams
    );
    if (recipeList.data.length > 0) {
      setRecipes(recipeList.data);
      if (recipeList.data.length < import.meta.env.VITE_RECIPES_FOR_PAGE) {
        setLastPage(page);
      }
    } else {
      setLastPage(page);
      setPage(page - 1);
    }
    setLoading(false);
  };

  if (loading) return <LoadingPage />;

  return (
    <>
      <SearchFilterBar />
      <RecipeList recipeList={recipes} />
      <PageNavigation page={page} setPage={setPage} lastPage={lastPage} />
    </>
  );
};

export default RecipeListPage;
