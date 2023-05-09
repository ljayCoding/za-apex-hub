import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tournaments from './components/Tournaments/Tournaments';
import Home from './components/Home/Home';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ClipSubmission from './components/ClipSubmission/ClipSubmission';

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#06D6A0',
    },
    background: {
      default: '#222222',
    },
    text: {
      primary: '#06D6A0',
    },
  },
  typography: {
    body1: {
      fontFamily: ['Kanit', 'sans-serif'].join(','),
    },
    h5: {
      fontFamily: ['Space Grotesk', 'sans-serif'].join(','),
      fontWeight: 'bold',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/tournaments" element={<Tournaments />}></Route>
          <Route
            path="/clip-submission"
            element={<ClipSubmission />}
          ></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
