export interface CommentAPIGet {
  id: string;
  recipeId: string;
  comment: string;
  rating: number;
  date: string;
}

export interface CommentAPIPost {
  recipeId: string;
  comment: string;
  rating: number;
  date: string;
}
