import React from "react";
import RecipeCard from "./components/RecipeCard";
import { RecipeAPI } from "./types/recipe";

const App: React.FC = () => {
  const recipe: RecipeAPI = {
    id: "1",
    name: "Spaghetti Carbonara",
    ingredients: [
      "Spaghetti",
      "Eggs",
      "Parmesan Cheese",
      "Pancetta",
      "Black Pepper",
    ],
    instructions:
      "Boil the spaghetti. Fry the pancetta. Mix eggs and cheese. Combine all.",
    cuisineId: "1",
    dietId: "3",
    difficultyId: "3",
    image: "/uploads/carbonara-horizontal-square640-v2.jpg",
    comments: [
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
    ],
    cuisine: { id: "1", name: "Italian" },
    diet: { id: "3", name: "Non-Vegetarian" },
    difficulty: { id: "3", name: "Hard" },
  };
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <RecipeCard key={recipe.id} recipe={recipe} />
        </div>
      </div>
    </>
  );
};

export default App;
