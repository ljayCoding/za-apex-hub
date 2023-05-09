import { Button, Box, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  const [showMenu, setShowMenu] = useState(false);

  const clickHandler = () => {
    setShowMenu(!showMenu);
  };

  return desktop ? (
    <Box
      sx={{ borderBottom: '2px black solid', backgroundColor: '#073B4C' }}
    >
      <Button
        component={Link}
        to="/"
        sx={{
          '&:hover': {
            fontWeight: 'bold',
          },
        }}
      >
        Home
      </Button>
      <Button
        component={Link}
        to="/tournaments"
        sx={{
          '&:hover': {
            fontWeight: 'bold',
          },
        }}
      >
        Tournaments
      </Button>
      <Button
        component={Link}
        to="/clip-submission"
        sx={{
          '&:hover': {
            fontWeight: 'bold',
          },
        }}
      >
        Clip Submission
      </Button>
      <Link
        to="https://discord.gg/qSdEMMAFGj"
        style={{ color: '#06D6A0' }}
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon
          style={{
            position: 'absolute',
            right: '0px',
            margin: '10px',
            fontSize: '20px',
          }}
          icon={faDiscord}
        ></FontAwesomeIcon>
      </Link>
      <Link
        to="https://twitter.com/ApexAfrUpdates"
        style={{ color: '#06D6A0' }}
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon
          style={{
            position: 'absolute',
            right: '30px',
            margin: '10px',
            fontSize: '20px',
          }}
          icon={faTwitter}
        ></FontAwesomeIcon>
      </Link>
      <Link
        to="https://www.youtube.com/@ApexAfricaHub"
        style={{ color: '#06D6A0' }}
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon
          style={{
            position: 'absolute',
            right: '57px',
            margin: '10px',
            fontSize: '20px',
          }}
          icon={faYoutube}
        ></FontAwesomeIcon>
      </Link>
    </Box>
  ) : (
    <Box
      sx={{
        borderBottom: '2px black solid',
        backgroundColor: '#073B4C',
      }}
    >
      <>
        <Link
          to="https://discord.gg/qSdEMMAFGj"
          style={{ color: '#06D6A0' }}
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            style={{
              position: 'absolute',
              right: '0px',
              margin: '10px',
              fontSize: '20px',
            }}
            icon={faDiscord}
          ></FontAwesomeIcon>
        </Link>
        <Link
          to="https://twitter.com/ApexAfrUpdates"
          style={{ color: '#06D6A0' }}
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            style={{
              position: 'absolute',
              right: '30px',
              margin: '10px',
              fontSize: '20px',
            }}
            icon={faTwitter}
          ></FontAwesomeIcon>
        </Link>
        <Link
          to="https://www.youtube.com/@ApexAfricaHub"
          style={{ color: '#06D6A0' }}
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon
            style={{
              position: 'absolute',
              right: '57px',
              margin: '10px',
              fontSize: '20px',
            }}
            icon={faYoutube}
          ></FontAwesomeIcon>
        </Link>
        {showMenu || (
          <MenuIcon
            sx={{
              fontSize: '30px',
              marginTop: '5px',
              marginLeft: '2px',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
            onClick={clickHandler}
          ></MenuIcon>
        )}
        {showMenu && (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <MenuOpenIcon
              sx={{
                fontSize: '30px',
                marginTop: '5px',
                marginLeft: '2px',
                '&:hover': { cursor: 'pointer' },
              }}
              onClick={clickHandler}
            ></MenuOpenIcon>{' '}
            <Button
              component={Link}
              to="/"
              sx={{
                '&:hover': {
                  fontWeight: 'bold',
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/tournaments"
              sx={{
                '&:hover': {
                  fontWeight: 'bold',
                },
              }}
            >
              Tournaments
            </Button>
            <Button
              component={Link}
              to="/clip-submission"
              sx={{
                '&:hover': {
                  fontWeight: 'bold',
                },
              }}
            >
              Clip Submission
            </Button>
          </Box>
        )}
      </>
    </Box>
  );
};

export default NavBar;
