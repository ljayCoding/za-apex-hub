import { Box, Typography, Button } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';
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
        sx={{ color: 'white', margin: '5px', textAlign: 'center' }}
      >
        This clip submission contributes towards the local highlights*
        videos. This is open to ZA/Africa only!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'white',
          margin: '10px',
          textAlign: 'center',
          position: 'absolute',
          bottom: '0',
        }}
      >
        *Submitting to the google form will be for the{' '}
        <Link
          to="https://www.youtube.com/@ApexAfricaHub"
          style={{ color: '#06D6A0' }}
        >
          YouTube
        </Link>{' '}
        highlights videos!
      </Typography>
      <Button
        sx={{
          margin: 'auto',
          display: 'flex',
          textAlign: 'center',
          width: '130px',
          fontSize: '12px',
          '&:hover': {
            fontWeight: 'bold',
          },
        }}
        variant="outlined"
        component={Link}
        to="https://docs.google.com/forms/d/e/1FAIpQLSdiA-N1TIl6KIpuZO1wAeubGb6zF8qZLBjwoPioyX2RvtQ2Jg/viewform"
        target="_blank"
      >
        Submit a clip
      </Button>
      <Typography
        variant="h5"
        sx={{ textAlign: 'center', marginTop: '25px' }}
      >
        Clip Of The Week
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: 'white', margin: '5px', textAlign: 'center' }}
      >
        By making a tweet of a clip and tagging the main{' '}
        <Link
          to="https://twitter.com/ApexAfrUpdates"
          target="_blank"
          style={{
            color: '#06D6A0',
          }}
        >
          Twitter
        </Link>{' '}
        page you enter yourself into being featured as the clip of the
        week!
      </Typography>
      <Button
        sx={{
          margin: 'auto',
          display: 'flex',
          textAlign: 'center',
          width: '130px',
          fontSize: '12px',
          '&:hover': {
            fontWeight: 'bold',
          },
        }}
        variant="outlined"
        component={Link}
        to="https://ctt.ac/iS06b"
        target="_blank"
      >
        Make a tweet
      </Button>
    </Box>
  );
};
export default ClipSubmission;
