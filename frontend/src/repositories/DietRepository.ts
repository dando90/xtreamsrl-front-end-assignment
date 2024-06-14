import { BaseRepository } from "./BaseRepository";
import { RecipeAPI } from "../types/recipe";

class DietRepository extends BaseRepository<RecipeAPI> {
  collection = "diets";
}

export default DietRepository;
