import { Box, Button, Typography } from '@mui/material';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import useLocalStorage from 'use-local-storage';

function Login() {
  const [user, setUser] = useLocalStorage('user', null);

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
      {' '}
      <Box
        sx={{
          width: '210px',
          margin: 'auto',
          top: '5vh',
          position: 'relative',
        }}
      >
        {!user ? (
          <GoogleLogin
            onSuccess={responseMessage}
            onError={errorMessage}
            size="medium"
            shape="pill"
            theme="filled_blue"
            text="signin_with"
          />
        ) : (
          <>
            <Button
              onClick={logOut}
              sx={{
                position: 'relative',
                left: '55px',
                '&:hover': {
                  fontWeight: 'bold',
                },
              }}
              variant="contained"
            >
              Log out
            </Button>
            <Typography
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                margin: '10px',
              }}
            >
              Welcome, {user.given_name}.
            </Typography>
          </>
        )}{' '}
      </Box>
    </>
  );
}
export default Login;
