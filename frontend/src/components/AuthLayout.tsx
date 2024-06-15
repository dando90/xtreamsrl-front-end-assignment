import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";

const AuthLayout = () => {
  const { token, setToken } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="m-5">
        AuthLayout
        <button onClick={() => setToken(null)}>Logout</button>
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
