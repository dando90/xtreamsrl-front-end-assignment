import { BaseRepository } from "./BaseRepository";
import { CuisineAPIGet, CuisineAPIPost } from "../types/cuisine";

class CuisineRepository extends BaseRepository<CuisineAPIGet, CuisineAPIPost> {
  collection = "cuisines";
}

export default CuisineRepository;
