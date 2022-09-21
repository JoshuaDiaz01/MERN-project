
import './App.css';
import { Main } from '../src/views/Main'
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, Typography } from '@mui/material';

import {InteractiveList } from './components/List_errors';
import { ViewOne } from "./views/ViewOne"
import { useEffect, useState } from 'react';
import { getItemById } from './services/localHostApiService';

function App() {
  const [itemData, setItemData] = useState([])
  const theme = createTheme({
    palette: {
      primary: {
        main: "#292F4F"
      }
    }
  })

  useEffect(() => {
    getItemById("632a38d1ba5831a78f9c5e0e")
      .then((data) => {
        setItemData(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div>
        <Typography variant="h2" color="primary">Inventori</Typography>
        {/* <Main /> uncomment later when pushing */}
        <ViewOne itemData={itemData}/>



      </div>
    </ThemeProvider>
  );
}

export default App;
