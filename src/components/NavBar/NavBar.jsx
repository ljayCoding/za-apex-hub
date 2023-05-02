import { Button, Box, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const NavBar = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  const [showModal, setShowModal] = useState(false);

  const clickHandler = () => {
    setShowModal(!showModal);
  };

  if (desktop) {
    return (
      <Box sx={{ borderBottom: '2px black solid' }}>
        <Button component={Link} to="/">
          Home
        </Button>
        <Button component={Link} to="/tournaments">
          Tournaments
        </Button>
        <Button component={Link} to="/clip-submission">
          Clip Submission
        </Button>
        <a
          href="https://discord.gg/qSdEMMAFGj"
          style={{ color: '#06D6A0' }}
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
        </a>
      </Box>
    );
  }
  return (
    <Box sx={{ borderBottom: '2px black solid' }}>
      <>
        {showModal || (
          <>
            <MenuIcon
              sx={{
                fontSize: '30px',
                marginTop: '5px',
                marginLeft: '2px',
                '&:hover': { cursor: 'pointer' },
              }}
              onClick={clickHandler}
            ></MenuIcon>
            <a
              href="https://discord.gg/qSdEMMAFGj"
              style={{ color: '#06D6A0' }}
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
            </a>
          </>
        )}
        {showModal && (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <a
              href="https://discord.gg/qSdEMMAFGj"
              style={{ color: '#06D6A0' }}
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
            </a>
            <MenuOpenIcon
              sx={{
                fontSize: '30px',
                marginTop: '5px',
                marginLeft: '2px',
                '&:hover': { cursor: 'pointer' },
              }}
              onClick={clickHandler}
            ></MenuOpenIcon>{' '}
            <Button component={Link} to="/">
              Home
            </Button>
            <Button component={Link} to="/tournaments">
              Tournaments
            </Button>
            <Button component={Link} to="/clip-submission">
              Clip Submission
            </Button>
          </Box>
        )}
      </>
    </Box>
  );
};
export default NavBar;
