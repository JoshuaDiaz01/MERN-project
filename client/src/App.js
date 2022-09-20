
import './App.css';
import { Main } from '../src/views/Main'
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, Typography } from '@mui/material';

import {InteractiveList } from './components/List_errors';


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#292F4F"
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div>
        <Typography variant="h2" color="primary">Inventori</Typography>
        <Main />



      </div>
    </ThemeProvider>
  );
}

export default App;
