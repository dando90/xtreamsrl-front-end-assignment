import { BaseRepository } from "./BaseRepository";
import { DietAPI } from "../types/diet";

class DietRepository extends BaseRepository<DietAPI> {
  collection = "diets";
}

export default DietRepository;
