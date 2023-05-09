import { Tweet } from 'react-twitter-widgets';
import {
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ClipOfTheWeek = ({ tweetId, ownerName, ownerURL }) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Box>
      <>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            marginBottom: '5px',
            marginTop: '15px',
            fontFamily: 'Space Grotesk',
          }}
        >
          Clip Of The Week!
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            color: 'white',
            marginBottom: '15px',
          }}
          variant="body1"
        >
          {' '}
          Check out this week&apos;s top clip by{' '}
          <Typography
            sx={{
              '&:hover': {
                fontWeight: 'bold',
              },
              color: '#06D6A0',
            }}
            component={Link}
            to={ownerURL}
            target="_blank"
          >
            {ownerName}
          </Typography>
        </Typography>
        {desktop && (
          <Tweet
            tweetId={tweetId}
            options={{ align: 'center', theme: 'dark', width: '400px' }}
          />
        )}
        {desktop || (
          <Tweet
            tweetId={tweetId}
            options={{ align: 'center', theme: 'dark', width: '250px' }}
          />
        )}
        <Button
          sx={{
            margin: 'auto',
            marginBottom: '20px',
            marginTop: '20px',
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
          to="/clip-submission"
        >
          Submit your clip
        </Button>
      </>
    </Box>
  );
};
export default ClipOfTheWeek;
