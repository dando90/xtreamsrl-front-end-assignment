import { useEffect, useState } from "react";
import RecipeRepository from "../repositories/RecipeRepository";
import { RecipeAPIGet } from "../types/recipe";
import RecipeSingle from "../components/RecipeSingle";
import { Link, useParams } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";

const RecipePage: React.FC = () => {
  const defaultRecipeState: RecipeAPIGet = {
    id: "",
    name: "",
    ingredients: [],
    instructions: "",
    cuisineId: "",
    dietId: "",
    difficultyId: "",
    image: "",
  };

  const [recipe, setRecipes] = useState<RecipeAPIGet>(defaultRecipeState);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    setLoading(true);
    const recipeRepository = new RecipeRepository();
    const recipeItem = await recipeRepository.show(
      id || "",
      ["cuisine", "diet", "difficulty"],
      ["comments"]
    );
    setRecipes(recipeItem.data);
    setLoading(false);
  };

  if (loading) return <LoadingPage />;

  return (
    <>
      <Link
        className="text-bold text-[40px] m-10 align-middle text-primary"
        to={"/recipes"}
      >
        <ArrowLongLeftIcon
          className="inline-block m-3 h-10 w-10 text-primary"
          aria-hidden="true"
        />
        Back To The List
      </Link>
      <RecipeSingle recipe={recipe} />
    </>
  );
};

export default RecipePage;
