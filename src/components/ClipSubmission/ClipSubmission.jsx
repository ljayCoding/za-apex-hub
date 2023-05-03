import { Box, Typography } from '@mui/material';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

const ClipSubmission = () => {
  return (
    <Box>
      <NavBar />
      <Typography
        variant="h5"
        sx={{ textAlign: 'center', marginTop: '5px' }}
      >
        Clip Submission
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'white', margin: '15px', textAlign: 'center' }}
      >
        This clip submission contributes towards the local highlights
        videos. This is open to ZA/Africa only!
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'white', margin: '15px', textAlign: 'center' }}
      >
        At the current moment the only way to submit clips will be to
        follow{' '}
        <Link
          style={{ color: '#06D6A0' }}
          to="https://docs.google.com/forms/d/e/1FAIpQLSdiA-N1TIl6KIpuZO1wAeubGb6zF8qZLBjwoPioyX2RvtQ2Jg/viewform?usp=sf_link"
          target="_blank"
        >
          here
        </Link>
      </Typography>
    </Box>
  );
};
export default ClipSubmission;
