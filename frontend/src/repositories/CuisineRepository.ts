import { BaseRepository } from "./BaseRepository";
import { CuisineAPI } from "../types/cuisine";

class CuisineRepository extends BaseRepository<CuisineAPI, FormData> {
  collection = "cuisines";
}

export default CuisineRepository;
