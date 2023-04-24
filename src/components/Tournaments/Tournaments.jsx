import { Box, Typography } from '@mui/material';
import NavBar from '../NavBar/NavBar';

const Tournaments = () => {
  return (
    <Box>
      <NavBar />
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Tournaments
      </Typography>
    </Box>
  );
};
export default Tournaments;
