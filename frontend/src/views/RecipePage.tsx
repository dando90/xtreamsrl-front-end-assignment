import { useEffect, useState } from "react";
import RecipeRepository from "../repositories/RecipeRepository";
import { RecipeAPI } from "../types/recipe";
import RecipeSingle from "../components/RecipeSingle";
import { useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";

const RecipePage: React.FC = () => {
  const defaultRecipeState: RecipeAPI = {
    id: "",
    name: "",
    ingredients: [],
    instructions: "",
    cuisineId: "",
    dietId: "",
    difficultyId: "",
    image: "",
  };

  const [recipe, setRecipes] = useState<RecipeAPI>(defaultRecipeState);
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

  if (loading) return <LoadingPage />;

  return (
    <>
      <div>RecipePage</div>
      <RecipeSingle recipe={recipe} />
    </>
  );
};

export default RecipePage;
