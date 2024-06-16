import { useEffect, useState } from "react";
import RecipeRepository from "../repositories/RecipeRepository";
import { RecipeAPI } from "../types/recipe";
import RecipeSingle from "../components/RecipeSingle";
import { useNavigate, useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";

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
  const navigate = useNavigate();

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
      <h2 className="text-bold text-[40px] m-10 text-primary">
        <ArrowLongLeftIcon
          className="inline-block m-3 h-10 w-10 text-primary"
          aria-hidden="true"
          onClick={() => navigate("/recipes")}
        />
        Back To The List
      </h2>
      <RecipeSingle recipe={recipe} />
    </>
  );
};

export default RecipePage;
