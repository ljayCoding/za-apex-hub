import { Button } from "@mui/material";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import useLocalStorage from "use-local-storage";

function Login() {
  const [user, setUser] = useLocalStorage("user", null);

  const responseMessage = (response) => {
    setUser(jwt_decode(response.credential));
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  const logOut = () => {
    googleLogout();

    setUser(null);
  };

  return (
    <>
      {!user ? (
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      ) : (
        <>
          <span>{user?.email}</span>
          <Button onClick={logOut}>Log out</Button>
        </>
      )}
    </>
  );
}
export default Login;
