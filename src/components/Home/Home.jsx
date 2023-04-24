import { Box, Typography } from '@mui/material';
import NavBar from '../NavBar/NavBar';

const Home = () => {
  return (
    <Box>
      <NavBar />
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Home
      </Typography>
    </Box>
  );
};
export default Home;
