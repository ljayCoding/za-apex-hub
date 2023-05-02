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
    </Box>
  );
};
export default Tournaments;
