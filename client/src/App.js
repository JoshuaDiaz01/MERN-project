
import './App.css';
import { Main } from '../src/views/Main'
import { ViewOne } from './views/ViewOne'
import NavBar from "./components/NavBar";

import { createTheme, ThemeProvider, CssBaseline, Box } from '@mui/material';
import {

  Route,
  Routes


} from 'react-router-dom';
import Footer from './components/Footer';


function App() {


  const theme = createTheme({
    palette: {
      primary: {
        main: "#292F4F"
      }
    },
    shadows: {
      1: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      2: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
      3: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
      4: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
      8: "0px 5px 5px -3px rgba(0,0,0,0.4),0px 8px 10px 1px rgba(0,0,0,0.3),0px 3px 14px 2px rgba(0,0,0,0.2)"
    }
  })




  return (

    <ThemeProvider theme={theme}>

      <CssBaseline />

      <Box sx={{ backgroundColor: "primary.main" }}>
        <NavBar></NavBar>
        <Box sx={{ padding: 3 }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="items/:id" element={<ViewOne />} />
          </Routes>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>

  );
}

export default App;
