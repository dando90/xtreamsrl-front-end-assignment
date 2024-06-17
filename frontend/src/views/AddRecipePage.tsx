import { Link } from "react-router-dom";
import RecipeAdd from "../components/RecipeAdd";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";

const AddRecipePage: React.FC = () => {
  return (
    <>
      <Link
        className="text-bold text-[40px] m-10 align-middle text-primary"
        to={"/recipes"}
      >
        <ArrowLongLeftIcon
          className="inline-block m-3 h-10 w-10 text-primary"
          aria-hidden="true"
        />
        Back To The List
      </Link>
      <RecipeAdd />
    </>
  );
};

export default AddRecipePage;
