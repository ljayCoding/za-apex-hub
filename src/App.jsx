import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tournaments from './components/Tournaments/Tournaments';
import Home from './components/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material';
import PageNotFound from './components/PageNotFound/PageNotFound';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#06D6A0',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={baseTheme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/tournaments" element={<Tournaments />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
