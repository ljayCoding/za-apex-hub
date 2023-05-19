import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tournaments from './Pages/Tournaments/Tournaments';
import Home from './Pages/Home/Home';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
} from '@mui/material';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import ClipSubmission from './Pages/ClipSubmission/ClipSubmission';
import SignIn from './Pages/SignIn/SignIn';
import News from './Pages/News/News';
import Article from './components/Article/Article';

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
      <Box
        sx={{
          backgroundImage: 'url(/allogo.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '700px',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        <ThemeProvider theme={baseTheme}>
          <CssBaseline />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/tournaments" element={<Tournaments />}></Route>
            <Route
              path="/clip-submission"
              element={<ClipSubmission />}
            ></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
            <Route path="/news" element={<News />}></Route>
            <Route path="/news/:id" element={<Article />}></Route>
            <Route path="/*" element={<PageNotFound />}></Route>
          </Routes>
        </ThemeProvider>
      </Box>
    </BrowserRouter>
  );
}

export default App;
