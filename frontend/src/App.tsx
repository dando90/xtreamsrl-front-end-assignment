import React from "react";
import RecipeCard from "./components/RecipeCard";

const App: React.FC = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-red-500 ">Test project</h1>
          <RecipeCard></RecipeCard>
        </div>
      </div>
    </>
  );
};

export default App;
