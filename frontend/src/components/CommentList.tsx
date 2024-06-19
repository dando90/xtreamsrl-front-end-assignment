import { useState } from "react";
import { CommentAPI } from "../types/comment";
import { formatDateForHumans } from "../utils/formatDate";
import CommentsRepository from "../repositories/CommentRepository";
import LoadingPage from "../views/LoadingPage";

interface CommentListProps {
  recipeId: string;
  comments: CommentAPI[];
}

const CommentList: React.FC<CommentListProps> = ({ recipeId, comments }) => {
  const [commentList, setCommentList] = useState(comments);
  const [newComment, setNewComment] = useState({
    recipeId: recipeId,
    comment: "",
    rating: 5,
    date: new Date().toISOString(),
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const valueToStore = e.target.type == "radio" ? parseInt(value) : value;
    setNewComment((prevState) => ({
      ...prevState,
      [name]: valueToStore,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const commentRepository = new CommentsRepository();
    setNewComment((prevState) => ({
      ...prevState,
      date: new Date().toISOString(),
      id: "",
    }));
    const newCommentSaved = await commentRepository.store(newComment);
    setCommentList((prevState) => [...prevState, newCommentSaved.data]);
    setNewComment({
      recipeId: recipeId,
      comment: "",
      rating: 0,
      date: new Date().toISOString(),
    });
    setLoading(false);
  };

  if (loading) return <LoadingPage />;

  return (
    <div className="mx-auto my-8 p-6 w-full bg-background rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-textSecondary mb-4">
        Comments
      </h2>
      <div className="space-y-4">
        {commentList.map((comment, index) => (
          <div
            key={index}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-gray-600">
                {formatDateForHumans(comment.date)}
              </span>
              <span className="text-yellow-500">
                {"⭐".repeat(comment.rating)}
              </span>
            </div>
            <p className="text-gray-700">{comment.comment}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} className="mt-6">
        <h3 className="text-xl text-textSecondary font-semibold mb-4">
          Add a Comment
        </h3>
        <textarea
          name="comment"
          value={newComment.comment}
          onChange={handleInputChange}
          placeholder="Write your comment here"
          className="w-full p-2 mb-2 border  focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
          required
        />
        <div className="w-full p-2 mb-4 border border-gray-300 rounded-lg">
          <p>Recipe Rating</p>
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num} className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="rating"
                value={num}
                checked={newComment.rating == num}
                onChange={handleInputChange}
                required
              />
              <span className="ml-2">{num}</span>
            </label>
          ))}
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-primary font-bold text-white rounded-lg"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default CommentList;
