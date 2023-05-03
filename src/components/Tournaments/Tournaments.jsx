import { Box, Typography } from '@mui/material';
import NavBar from '../NavBar/NavBar';

const Tournaments = () => {
  return (
    <Box>
      <NavBar />
      <Typography
        variant="h5"
        sx={{ textAlign: 'center', marginTop: '5px' }}
      >
        Tournaments
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'white', margin: '15px', textAlign: 'center' }}
      >
        There is no tournament support yet!
      </Typography>
    </Box>
  );
};
export default Tournaments;
