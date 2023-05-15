import BallTriangle from 'react-loading-icons/dist/esm/components/ball-triangle';
import { Box, Typography } from '@mui/material';

const Loader = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        top: '35vh',
      }}
    >
      <BallTriangle stroke="#06D6A0">Loading...</BallTriangle>
      <Typography>Loading</Typography>
    </Box>
  );
};
export default Loader;
