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
      <h2 className="text-bold text-[40px] m-10 text-primary">Recipe List</h2>
      {recipeComponentList}
    </>
  );
};

export default RecipeList;
