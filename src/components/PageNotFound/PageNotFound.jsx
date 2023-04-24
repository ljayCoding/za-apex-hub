import { Box, Typography } from '@mui/material';
import NavBar from '../NavBar/NavBar';

const PageNotFound = () => {
  return (
    <Box>
      <NavBar />
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Page Not Found!
      </Typography>
    </Box>
  );
};
export default PageNotFound;
