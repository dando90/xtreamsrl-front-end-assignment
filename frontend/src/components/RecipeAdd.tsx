import { useState } from "react";
import { RecipeAPI } from "../types/recipe";
import { useStateContext } from "../contexts/contextProvider";
import RecipeRepository from "../repositories/RecipeRepository";
import { useNavigate } from "react-router-dom";

const RecipeAdd: React.FC = () => {
  const { filterData } = useStateContext();
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedDiet, setSelectedDiet] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const navigate = useNavigate();

  const handleIngredientChange = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    const newRecipe: RecipeAPI = {
      name,
      ingredients,
      instructions,
      image,
      comments: [],
      cuisineId: selectedCuisine,
      dietId: selectedDiet,
      difficultyId: selectedDifficulty,
    };

    const formData = new FormData();
    formData.append("name", newRecipe.name);
    formData.append("ingredients", newRecipe.ingredients.join(","));
    formData.append("instructions", newRecipe.instructions);
    if (image) {
      formData.append("image", image);
    }
    formData.append("cuisineId", newRecipe.cuisineId);
    formData.append("dietId", newRecipe.dietId);
    formData.append("difficultyId", newRecipe.difficultyId);

    const recipeRepository = new RecipeRepository();
    await recipeRepository.store(formData);

    navigate("/recipes");
  };

  return (
    <article className="flex flex-col gap-6 p-6 w-full mx-auto bg-white shadow-lg rounded-lg">
      <div className="text-2xl font-bold text-primary">Add a New Recipe</div>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Recipe Name"
          className="bg-background p-2 border focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex flex-col">
          <div className="font-bold">Ingredients</div>
          {ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Ingredient ${index + 1}`}
              className="bg-background p-2 border focus:outline-none focus:ring-2 focus:ring-primary rounded-lg mt-2"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
            />
          ))}
          <button
            className="mt-2 p-2 bg-primary text-white rounded-lg"
            onClick={addIngredient}
          >
            Add Ingredient
          </button>
        </div>

        <textarea
          placeholder="Instructions"
          className="bg-background p-2 border focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        />
        {image && (
          <img
            className="max-w-[500px]"
            src={URL.createObjectURL(image)}
            alt=""
          />
        )}
        <input
          type="file"
          className="bg-background p-2 border focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
          onChange={handleImageChange}
        />
        <select
          value={selectedCuisine}
          onChange={(e) => setSelectedCuisine(e.target.value)}
          className="bg-background flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">All Cuisines</option>
          {filterData.cuisines.map((cuisine) => (
            <option key={cuisine.id} value={cuisine.id}>
              {cuisine.name}
            </option>
          ))}
        </select>
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="bg-background flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">All Difficulties</option>
          {filterData.difficulties.map((difficulty) => (
            <option key={difficulty.id} value={difficulty.id}>
              {difficulty.name}
            </option>
          ))}
        </select>
        <select
          value={selectedDiet}
          onChange={(e) => setSelectedDiet(e.target.value)}
          className="bg-background flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">All Diets</option>
          {filterData.diets.map((diet) => (
            <option key={diet.id} value={diet.id}>
              {diet.name}
            </option>
          ))}
        </select>
        <button
          className="mt-4 p-2 bg-primary text-white rounded-lg"
          onClick={handleSave}
        >
          Save Recipe
        </button>
      </div>
    </article>
  );
};

export default RecipeAdd;
