import { useEffect, useState } from "react";
import RecipeRepository from "../repositories/RecipeRepository";
import { RecipeAPI } from "../types/recipe";
import RecipeList from "../components/RecipeList";
import PageNavigation from "../components/PageNavigation";

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
    setRecipes(recipeList.data);
    console.log(recipeList);
    setLoading(false);
  };

  return (
    <>
      <div>RecipeListPage</div>
      <RecipeList recipeList={recipes} />
      <PageNavigation page={page} setPage={setPage} />
    </>
  );
};

export default RecipeListPage;
