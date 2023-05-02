import { Box, Typography } from '@mui/material';
import NavBar from '../NavBar/NavBar';

const Home = () => {
  return (
    <Box>
      <NavBar />
      <Typography variant="h5" sx={{ textAlign: 'center', marginTop: '5px' }}>
        Home
      </Typography>
    </Box>
  );
};
export default Home;
