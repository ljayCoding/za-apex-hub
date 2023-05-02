import { Button, Box, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useState } from 'react';

const NavBar = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));

  const [showModal, setShowModal] = useState(false);

  const clickHandler = () => {
    setShowModal(!showModal);
    console.log(showModal);
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
      </Box>
    );
  }
  return (
    <Box sx={{ borderBottom: '2px black solid' }}>
      {showModal || (
        <MenuIcon
          sx={{ marginTop: '5px', marginLeft: '2px' }}
          onClick={clickHandler}
        ></MenuIcon>
      )}
      {showModal && (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <MenuOpenIcon
            sx={{ marginTop: '5px', marginLeft: '2px' }}
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
    </Box>
  );
};
export default NavBar;
