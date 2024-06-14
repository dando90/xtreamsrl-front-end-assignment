import { useEffect, useState } from "react";
import RecipeRepository from "../repositories/RecipeRepository";
import { RecipeAPI } from "../types/recipe";
import RecipeList from "../components/RecipeList";

const RecipeListPage: React.FC = () => {
  const [recipes, setRecipes] = useState<RecipeAPI[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    setLoading(true);
    const recipeRepository = new RecipeRepository();
    const recipeList = await recipeRepository.index([
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
    </>
  );
};

export default RecipeListPage;
