import { useState } from "react";
import { useStateContext } from "../contexts/contextProvider";

const SearchFilterBar: React.FC = () => {
  const { searchParams, setSearchParams, filterData } = useStateContext();

  const [q, setQ] = useState<string>(searchParams.q);
  const [selectedCuisine, setSelectedCuisine] = useState<string>(
    searchParams.cuisineId
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>(
    searchParams.difficultyId
  );
  const [selectedDiet, setSelectedDiet] = useState(searchParams.dietId);

  const handleSearchClick = () => {
    setSearchParams({
      q,
      cuisineId: selectedCuisine,
      difficultyId: selectedDifficulty,
      dietId: selectedDiet,
    });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white shadow-md rounded-lg">
      <input
        type="q"
        placeholder="Search by name..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="bg-background flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
        onClick={handleSearchClick}
        className="px-4 py-2 bg-primary text-textPrimary rounded-md hover:bg-secondary hover:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Search
      </button>
    </div>
  );
};

export default SearchFilterBar;
