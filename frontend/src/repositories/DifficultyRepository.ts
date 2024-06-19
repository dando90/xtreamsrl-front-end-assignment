import { BaseRepository } from "./BaseRepository";
import { DifficultyAPI } from "../types/difficulty";

class DifficultyRepository extends BaseRepository<DifficultyAPI, FormData> {
  collection = "difficulties";
}

export default DifficultyRepository;
