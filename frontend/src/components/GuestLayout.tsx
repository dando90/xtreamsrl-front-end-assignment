import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";

const GuestLayout = () => {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="m-5">
        <Outlet />
      </div>
    </>
  );
};

export default GuestLayout;
