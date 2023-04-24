import {
  CssBaseline,
  createTheme,
  ThemeProvider,
  Button,
  Box,
} from '@mui/material';
import { useState } from 'react';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';

const themeLight = createTheme({
  palette: {
    background: {
      default: '#ffffff',
    },
    primary: {
      main: '#073B4C',
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: '#222222',
    },
    text: {
      primary: '#ffffff',
    },
    primary: {
      main: '#06D6A0',
    },
  },
});

const NavBar = () => {
  const [light, setLight] = useState(false);
  return (
    <Box sx={{ borderBottom: '2px black solid' }}>
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline />
        <Button href="/">Home</Button>
        <Button href="/tournaments">Tournaments</Button>
        <Button
          onClick={() => setLight((prev) => !prev)}
          sx={{ position: 'absolute', right: '0px' }}
        >
          <ModeNightOutlinedIcon />
        </Button>
      </ThemeProvider>
    </Box>
  );
};
export default NavBar;
