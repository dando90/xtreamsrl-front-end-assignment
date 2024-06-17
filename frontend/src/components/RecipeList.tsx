import { Link } from "react-router-dom";
import { RecipeAPI } from "../types/recipe";
import RecipeCard from "./RecipeCard";
interface RecipeListProps {
  recipeList: RecipeAPI[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipeList }) => {
  const recipeComponentList = recipeList.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} />;
  });

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-bold text-[40px] m-10 text-primary">Recipe List</h2>
        <Link
          className="px-4 py-2 mr-10 bg-primary text-textPrimary rounded-md hover:bg-secondary hover:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary"
          to={"/recipes/new"}
        >
          Add Recipe
        </Link>
      </div>
      {recipeComponentList}
    </>
  );
};

export default RecipeList;
