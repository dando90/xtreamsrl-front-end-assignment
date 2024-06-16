import { CommentAPI } from "../types/comment";
import { formatDateForHumans } from "../utils/formatDate";

interface CommentListProps {
  recipeId: string;
  comments: CommentAPI[];
}

const CommentList: React.FC<CommentListProps> = ({ recipeId, comments }) => {
  const commentsFake: CommentAPI[] = [
    {
      id: "1",
      recipeId: "1",
      comment: "Delicious and easy to make!",
      rating: 5,
      date: "2024-06-08T14:48:00.000Z",
    },
    {
      id: "2",
      recipeId: "1",
      comment: "Loved it! Perfect for a quick dinner.",
      rating: 4,
      date: "2024-06-09T12:30:00.000Z",
    },
    {
      id: "3",
      recipeId: "1",
      comment: "Great flavors, will make again.",
      rating: 5,
      date: "2024-06-10T09:45:00.000Z",
    },
  ];
  return (
    <div className="mx-auto my-8 p-6 w-full bg-background rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-textSecondary mb-4">
        Comments
      </h2>
      <div className="space-y-4">
        {commentsFake.map((comment, index) => (
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
            {/* TODO Add new comment */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
