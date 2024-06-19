import { BaseRepository } from "./BaseRepository";
import { RecipeAPIGet } from "../types/recipe";

class RecipeRepository extends BaseRepository<RecipeAPIGet, FormData> {
  collection = "recipes";
  forPage = import.meta.env.VITE_RECIPES_FOR_PAGE || 5;
}

export default RecipeRepository;
