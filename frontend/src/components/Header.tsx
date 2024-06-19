import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";

const Header = () => {
  const { setToken } = useStateContext();

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <header className="bg-primary text-textPrimary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">Recipe Site</h1>
        </Link>
        <button
          onClick={handleLogout}
          className="bg-background hover:bg-secondary hover:text-primary text-textPrimary font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
