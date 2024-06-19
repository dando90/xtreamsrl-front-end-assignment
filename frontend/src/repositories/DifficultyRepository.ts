import { BaseRepository } from "./BaseRepository";
import { DifficultyAPIGet, DifficultyAPIPost } from "../types/difficulty";

class DifficultyRepository extends BaseRepository<
  DifficultyAPIGet,
  DifficultyAPIPost
> {
  collection = "difficulties";
}

export default DifficultyRepository;
