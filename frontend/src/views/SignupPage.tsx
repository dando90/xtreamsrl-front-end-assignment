import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";
import recipeImage from "/recipe_site_img2.jpg";

const SignupPage: React.FC = () => {
  const { setToken } = useStateContext();

  return (
    <div className="flex min-h-screen bg-background">
      <div className="w-full  flex items-center justify-center p-8">
        <div className="w-full max-w-md  p-8 rounded-lg md:block hidden">
          <img
            className="max-w[800px] rounded-md"
            src={recipeImage}
            alt="Recipe site image"
          />
        </div>

        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-textPrimary mb-4">
            Login To Recipe Site
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-textPrimary text-sm font-bold mb-2"
                htmlFor="username"
              >
                E-mail
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                type="text"
                id="email"
                name="email"
                placeholder="Enter your e-mail"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-textPrimary text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-textPrimary text-sm font-bold mb-2"
                htmlFor="password"
              >
                Retype password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                type="password"
                id="password2"
                name="password2"
                placeholder="Re-enter your password"
              />
            </div>
            <button
              type="button"
              className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition duration-200"
              onClick={() => setToken("qwerty")}
            >
              Sign Up
            </button>
          </form>
          <div className="my-10 text-textPrimary text-sm font-bold">
            Already Registered?
            <Link
              className="ml-5 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition duration-200"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
