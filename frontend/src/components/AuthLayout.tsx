import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";
import Header from "./Header";

const AuthLayout = () => {
  const { token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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
