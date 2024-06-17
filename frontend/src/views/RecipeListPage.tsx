import { useEffect, useState } from "react";
import { useStateContext } from "../contexts/contextProvider";
import RecipeRepository from "../repositories/RecipeRepository";
import { RecipeAPI } from "../types/recipe";
import RecipeList from "../components/RecipeList";
import PageNavigation from "../components/PageNavigation";
import LoadingPage from "./LoadingPage";
import SearchFilterBar from "../components/SearchFilterBar";

const RecipeListPage: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeAPI[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { searchParams } = useStateContext();

  useEffect(() => {
    getRecipes();
  }, [page, null, searchParams]);

  const getRecipes = async () => {
    setLoading(true);
    const recipeRepository = new RecipeRepository();
    const recipeList = await recipeRepository.index(
      page,
      ["cuisine", "diet", "difficulty"],
      searchParams
    );
    setRecipes(recipeList.data);
    setLoading(false);
  };

  if (loading) return <LoadingPage />;

  return (
    <>
      <SearchFilterBar />
      <RecipeList recipeList={recipes} />
      <PageNavigation page={page} setPage={setPage} />
    </>
  );
};

export default RecipeListPage;
