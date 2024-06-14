import { useStateContext } from "../contexts/contextProvider";

const LoginPage: React.FC = () => {
  const { setToken } = useStateContext();

  return (
    <>
      <div>LoginPage</div>
      <button onClick={() => setToken("qwerty")}>Login</button>
    </>
  );
};

export default LoginPage;
