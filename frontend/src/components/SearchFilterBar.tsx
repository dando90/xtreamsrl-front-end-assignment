const SearchFilterBar: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Search by name..."
        className="bg-background flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <select className="bg-background flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
        <option value="">All Cuisines</option>
        <option value="1">Render Cuisines from /cuisines</option>
      </select>
      <select className="bg-background flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
        <option value="">All Difficulties</option>
        <option value="1">Render Difficulties from /difficulties</option>
      </select>
      <select className="bg-background flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
        <option value="">All Diets</option>
        <option value="1">Render Diets from /diets</option>
      </select>
      <button className="px-4 py-2 bg-primary text-textPrimary rounded-md hover:bg-secondary hover:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary">
        Search
      </button>
    </div>
  );
};

export default SearchFilterBar;
