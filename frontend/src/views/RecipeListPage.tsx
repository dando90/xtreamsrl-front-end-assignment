import { useEffect, useState } from "react";
import axiosClient from "../axiosClient";
import RecipeRepository from "../repositories/RecipeRepository";

const RecipeListPage: React.FC = () => {
  const [recipes, setRecipes] = useState();
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
    console.log(recipeList);
    setLoading(false);
  };

  return <div>RecipeListPage</div>;
};

export default RecipeListPage;
