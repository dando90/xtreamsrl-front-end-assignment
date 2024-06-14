import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "./views/HomePage";
import RecipeListPage from "./views/RecipeListPage";
import RecipePage from "./views/RecipePage";
import NotFoundPage from "./views/NotFoundPage";
import LoginPage from "./views/LoginPage";
import AuthLayout from "./components/AuthLayout";
import GuestLayout from "./components/GuestLayout";
import AddRecipePage from "./views/AddRecipePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/recipes" />,
      },
      {
        path: "/recipes",
        element: <RecipeListPage />,
      },

      {
        path: "/recipes/new",
        element: <AddRecipePage />,
      },
      {
        path: "/recipes/:id",
        element: <RecipePage />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
