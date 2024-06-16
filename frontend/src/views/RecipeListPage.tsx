import { useEffect, useState } from "react";
import RecipeRepository from "../repositories/RecipeRepository";
import { RecipeAPI } from "../types/recipe";
import RecipeList from "../components/RecipeList";
import PageNavigation from "../components/PageNavigation";
import LoadingPage from "./LoadingPage";

const RecipeListPage: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeAPI[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getRecipes();
  }, [page]);

  const getRecipes = async () => {
    setLoading(true);
    const recipeRepository = new RecipeRepository();
    const recipeList = await recipeRepository.index(page, [
      "cuisine",
      "diet",
      "difficulty",
    ]);
    console.log(recipeList.data.length);
    setRecipes(recipeList.data);
    console.log(recipeList);
    setLoading(false);
  };

  if (loading) return <LoadingPage />;

  return (
    <>
      <div>RecipeListPage</div>
      <RecipeList recipeList={recipes} />
      <PageNavigation page={page} setPage={setPage} />
    </>
  );
};

export default RecipeListPage;
