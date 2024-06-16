import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";

const AuthLayout = () => {
  const { token, setToken } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-textPrimary p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Recipe Site</h1>
          <button
            onClick={handleLogout}
            className="bg-background hover:bg-secondary hover:text-primary text-textPrimary font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-5">
        <Outlet />
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Recipe Site by Stefano Chiabrando.
          All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
