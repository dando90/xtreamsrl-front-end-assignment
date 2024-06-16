import { useStateContext } from "../contexts/contextProvider";

const SearchFilterBar: React.FC = () => {
  const { searchParams, setSearchParams, filterData } = useStateContext();

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Search by name..."
        className="bg-background flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <select className="bg-background flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
        <option value="">All Cuisines</option>
        {filterData.cuisines.map((cuisine) => (
          <option key={cuisine.id} value={cuisine.id}>
            {cuisine.name}
          </option>
        ))}
      </select>
      <select className="bg-background flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
        <option value="">All Difficulties</option>
        {filterData.difficulties.map((difficulty) => (
          <option key={difficulty.id} value={difficulty.id}>
            {difficulty.name}
          </option>
        ))}
      </select>
      <select className="bg-background flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
        <option value="">All Diets</option>
        {filterData.diets.map((diet) => (
          <option key={diet.id} value={diet.id}>
            {diet.name}
          </option>
        ))}
      </select>
      <button className="px-4 py-2 bg-primary text-textPrimary rounded-md hover:bg-secondary hover:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary">
        Search
      </button>
    </div>
  );
};

export default SearchFilterBar;
