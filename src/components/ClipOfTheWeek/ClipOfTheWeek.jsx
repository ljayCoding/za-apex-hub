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
        >
          {' '}
          Check out this week&apos;s top clip by{' '}
          <Link target="_blank" to={ownerURL} style={{ color: '#06D6A0' }}>
            {ownerName}
          </Link>
        </Typography>
        {desktop && (
          <Tweet
            tweetId="1654903694591156231"
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
