import { Link } from "react-router-dom";
import { RecipeAPI } from "../types/recipe";

interface RecipeCardProps {
  recipe: RecipeAPI;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
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

  return (
    <article
      className="flex flex-col gap-4 m-10 bg-white shadow-md rounded-lg transform transition-transform hover:shadow-lg"
      id={`recipe#${id}`}
    >
      <Link to={`/recipes/${id}`} className="flex flex-col gap-4">
        <img
          src={`http://localhost:8080${image}`}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        ></img>
        <div className="flex flex-col gap-2 p-4">
          <h2 className="text-xl font-semibold text-primary">{name}</h2>
          <p className="text-sm text-textPrimary">
            Ingredients: {ingredients.join(", ")}
          </p>
          <p className="text-sm text-textPrimary">{instructions}</p>
        </div>

        <div className="flex flex-row gap-3 p-4 justify-center">
          <div className="rounded-full border-black border-2 py-1 px-5 text-sm text-textSecondary">
            {cuisine?.name}
          </div>
          <div className="rounded-full border-black border-2 py-1 px-5 text-sm text-textSecondary">
            {diet?.name}
          </div>
          <div className="rounded-full border-black border-2 py-1 px-5 text-sm text-textSecondary">
            {difficulty?.name}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default RecipeCard;
