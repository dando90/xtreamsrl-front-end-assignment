import { BaseRepository } from "./BaseRepository";
import { RecipeAPI } from "../types/recipe";

class RecipeRepository extends BaseRepository<RecipeAPI> {
  collection = "recipes";
}

export default RecipeRepository;
