import { Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NewestVideo = ({ editorName, editorLink, src }) => {
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
            marginTop: '5px',
          }}
        >
          Our Newest Video!
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            color: 'white',
            marginBottom: '15px',
          }}
          variant="body1"
        >
          Check out our newest video edited by{' '}
          <Typography
            sx={{
              '&:hover': {
                fontWeight: 'bold',
              },
              color: '#06D6A0',
            }}
            component={Link}
            to={editorLink}
            target="_blank"
          >
            {editorName}
          </Typography>
        </Typography>
        {desktop && (
          <Box>
            <iframe
              style={{
                margin: 'auto',
                display: 'block',
                borderRadius: '10px',
                borderColor: '#06D6A0',
              }}
              width="560"
              height="315"
              src={src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Box>
        )}
        {desktop || (
          <Box>
            <iframe
              style={{
                margin: 'auto',
                display: 'block',
                borderRadius: '10px',
                borderColor: '#06D6A0',
                marginBottom: '15px',
              }}
              width="300"
              height="169"
              src={src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </Box>
        )}
      </>
    </Box>
  );
};
export default NewestVideo;
