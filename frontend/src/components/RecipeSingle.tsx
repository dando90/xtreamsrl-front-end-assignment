import { RecipeAPI } from "../types/recipe";

interface RecipeSingleProps {
  recipe: RecipeAPI;
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

  return (
    <article className="flex flex-col gap-2" id={`recipe#${id}`}>
      <div>{name}</div>
      <div>{ingredients.join(", ")}</div>
      <div>{instructions}</div>
      <img
        src={`http://localhost:8080${image}`}
        alt={name}
        height={300}
        width={300}
      ></img>
      <div className="flex flex-row gap-5">
        <div className="rounded-full border-black border-2 py-1 px-5">
          {cuisine?.name}
        </div>
        <div className="rounded-full border-black border-2 py-1 px-5">
          {diet?.name}
        </div>
        <div className="rounded-full border-black border-2 py-1 px-5">
          {difficulty?.name}
        </div>
      </div>
    </article>
  );
};

export default RecipeSingle;
