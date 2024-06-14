import { BaseRepository } from "./BaseRepository";
import { RecipeAPI } from "../types/recipe";

class CommentsRepository extends BaseRepository<RecipeAPI> {
  collection = "comments";
}

export default CommentsRepository;
