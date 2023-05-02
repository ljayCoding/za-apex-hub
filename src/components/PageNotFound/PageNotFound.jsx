import { Box, Typography } from '@mui/material';
import NavBar from '../NavBar/NavBar';

const PageNotFound = () => {
  return (
    <Box>
      <NavBar />
      <Typography variant="h5" sx={{ textAlign: 'center', marginTop: '5px' }}>
        Page Not Found!
      </Typography>
    </Box>
  );
};
export default PageNotFound;
