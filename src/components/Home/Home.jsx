import { Box, Typography } from '@mui/material';
import NavBar from '../NavBar/NavBar';

const Home = () => {
  return (
    <Box>
      <NavBar />
      <Typography
        variant="h5"
        sx={{ textAlign: 'center', marginTop: '5px' }}
      >
        Home
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'white', margin: '15px', textAlign: 'center' }}
      >
        Welcome to the ZA Apex website!
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'white', margin: '15px', textAlign: 'center' }}
      >
        This is still a work in progress but in the future I have plans for
        this website to be used as a hub where people can post all their
        customs in one central area!
      </Typography>
    </Box>
  );
};
export default Home;
