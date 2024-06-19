import { BaseRepository } from "./BaseRepository";
import { DietAPIGet, DietAPIPost } from "../types/diet";

class DietRepository extends BaseRepository<DietAPIGet, DietAPIPost> {
  collection = "diets";
}

export default DietRepository;
