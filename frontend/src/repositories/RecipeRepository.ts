import { BaseRepository } from "./BaseRepository";
import { RecipeAPI } from "../types/recipe";

class RecipeRepository extends BaseRepository<RecipeAPI> {
  collection = "recipes";
  forPage = import.meta.env.VITE_RECIPES_FOR_PAGE || 5;
}

export default RecipeRepository;
