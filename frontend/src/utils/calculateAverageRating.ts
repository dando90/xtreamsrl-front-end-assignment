import { CommentAPIGet } from "../types/comment";

export const calculateAverageRating = (comments: CommentAPIGet[]) => {
  if (comments.length === 0) return null;
  const totalRating = comments.reduce(
    (sum, comment) => sum + comment.rating,
    0
  );
  return (totalRating / comments.length).toFixed(1);
};
