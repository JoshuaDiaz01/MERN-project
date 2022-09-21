
import './App.css';
import { Main } from '../src/views/Main'

import { createTheme, ThemeProvider, CssBaseline, Typography} from '@mui/material';
import {
  Link as RouterLink,
  Router,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
} from 'react-router-dom';

import { purple } from '@mui/material/colors'

const color = purple[900];



function App() {


  const theme = createTheme({
    palette: {
      primary: {
        // main: "#292F4F",
        main: "#00ff00"
      }
    }
  })
  return (

    <ThemeProvider theme={theme}>

      <CssBaseline />

      <div>
        <Typography variant="h2">Inventori</Typography>
        <Routes>
          <Route element={<Main />} path="/" />

        </Routes>


      </div>
    </ThemeProvider>

  );
}

export default App;
