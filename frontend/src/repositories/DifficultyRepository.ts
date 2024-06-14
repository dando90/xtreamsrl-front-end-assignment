import { BaseRepository } from "./BaseRepository";
import { RecipeAPI } from "../types/recipe";

class DifficultyRepository extends BaseRepository<RecipeAPI> {
  collection = "difficulties";
}

export default DifficultyRepository;
