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
      <div>RecipeList</div>
      {recipeComponentList}
    </>
  );
};

export default RecipeList;
