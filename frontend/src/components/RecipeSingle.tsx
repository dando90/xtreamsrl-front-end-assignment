import { CommentAPIGet } from "../types/comment";
import { RecipeAPIGet } from "../types/recipe";
import CommentList from "./CommentList";

interface RecipeSingleProps {
  recipe: RecipeAPIGet;
}

const RecipeSingle: React.FC<RecipeSingleProps> = ({ recipe }) => {
  const {
    id,
    name,
    ingredients,
    instructions,
    image,
    cuisine,
    diet,
    difficulty,
    comments,
  } = recipe;

  const calculateAverageRating = (comments: CommentAPIGet[]) => {
    if (comments.length === 0) return null;
    const totalRating = comments.reduce(
      (sum, comment) => sum + comment.rating,
      0
    );
    return (totalRating / comments.length).toFixed(1);
  };

  const averageRating = calculateAverageRating(comments || []);

  return (
    <article
      className="flex flex-col gap-6 p-6 w-full mx-auto bg-white shadow-lg rounded-lg"
      id={`recipe#${id}`}
    >
      <div className="text-2xl font-bold text-primary">
        {name}
        {averageRating && ` - ${averageRating}`}
        <span className="opacity-50">/5</span> ⭐
      </div>

      <div className="flex flex-row gap-5 ">
        <img
          className="w-3/5 h-auto rounded-lg"
          src={`http://localhost:8080${image}`}
          alt={name}
        />
        <div className="w-1/5 text-lg text-gray-700">
          <div className="font-bold">Ingredients</div>
          <ul className="ml-5">
            {ingredients.map((ingredient, index) => (
              <li className="list-disc" key={index}>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-lg text-gray-700">
        <div className="font-bold">Instructions</div>
        {instructions}
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        {cuisine && (
          <div className="rounded-full border border-gray-300 py-1 px-5 text-sm text-gray-600">
            {cuisine.name}
          </div>
        )}
        {diet && (
          <div className="rounded-full border border-gray-300 py-1 px-5 text-sm text-gray-600">
            {diet.name}
          </div>
        )}
        {difficulty && (
          <div className="rounded-full border border-gray-300 py-1 px-5 text-sm text-gray-600">
            {difficulty.name}
          </div>
        )}
      </div>
      <CommentList recipeId={id} comments={comments || []} />
    </article>
  );
};

export default RecipeSingle;
