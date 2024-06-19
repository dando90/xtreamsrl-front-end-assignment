import { CommentAPIGet } from "./comment";
import { CuisineAPIGet } from "./cuisine";
import { DietAPIGet } from "./diet";
import { DifficultyAPIGet } from "./difficulty";

export interface RecipeAPIGet {
  id: string;
  name: string;
  ingredients: Array<string>;
  instructions: string;
  cuisineId: string;
  dietId: string;
  difficultyId: string;
  image: string;
  cuisine?: CuisineAPIGet;
  diet?: DietAPIGet;
  difficulty?: DifficultyAPIGet;
  comments?: CommentAPIGet[];
}

export interface RecipeAPIPost {
  id?: string;
  name: string;
  ingredients: Array<string>;
  instructions: string;
  cuisineId: string;
  dietId: string;
  difficultyId: string;
  image: File | null;
}
