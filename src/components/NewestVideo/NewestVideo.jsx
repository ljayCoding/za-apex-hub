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
          Our newest video!
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            color: 'white',
            marginBottom: '15px',
          }}
        >
          Check out our newest video edited by{' '}
          <Link
            style={{ color: '#06D6A0' }}
            to={editorLink}
            target="_blank"
          >
            {editorName}
          </Link>
        </Typography>
        {desktop && (
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
        )}
        {desktop || (
          <iframe
            style={{
              margin: 'auto',
              display: 'block',
              borderRadius: '10px',
              borderColor: '#06D6A0',
            }}
            width="300"
            height="169"
            src={src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </>
    </Box>
  );
};
export default NewestVideo;
