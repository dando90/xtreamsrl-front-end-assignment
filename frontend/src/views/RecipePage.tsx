import { useEffect, useState } from "react";
import RecipeRepository from "../repositories/RecipeRepository";
import { RecipeAPI } from "../types/recipe";
import RecipeSingle from "../components/RecipeSingle";
import { useParams } from "react-router-dom";

const RecipePage: React.FC = () => {
  const [recipe, setRecipes] = useState<RecipeAPI>();
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    setLoading(true);
    const recipeRepository = new RecipeRepository();
    console.log(id);
    const recipeItem = await recipeRepository.show(
      id || "",
      ["cuisine", "diet", "difficulty"],
      ["comment"]
    );
    setRecipes(recipeItem.data);
    console.log(recipeItem);
    setLoading(false);
  };

  return (
    <>
      <div>RecipePage</div>
      {recipe ? <RecipeSingle recipe={recipe} /> : <div>Loading...</div>}
    </>
  );
};

export default RecipePage;
