import { CommentAPI } from "./comment";
import { CuisineAPI } from "./cuisine";
import { DietAPI } from "./diet";
import { DifficultyAPI } from "./difficulty";

export interface RecipeAPI {
  id?: string;
  name: string;
  ingredients: Array<string>;
  instructions: string;
  cuisineId: string;
  dietId: string;
  difficultyId: string;
  image: string;
  cuisine?: CuisineAPI;
  diet?: DietAPI;
  difficulty?: DifficultyAPI;
  comments?: CommentAPI[];
}
