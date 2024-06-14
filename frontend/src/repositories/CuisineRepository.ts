import { BaseRepository } from "./BaseRepository";
import { RecipeAPI } from "../types/recipe";

class CuisineRepository extends BaseRepository<RecipeAPI> {
  collection = "cuisines";
}

export default CuisineRepository;
