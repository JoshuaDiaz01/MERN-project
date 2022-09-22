
import './App.css';
import { Main } from '../src/views/Main'
import {ViewOne} from './views/ViewOne'
import NavBar from "./components/NavBar";

import { createTheme, ThemeProvider, CssBaseline, Typograpyh, Box} from '@mui/material';
import {
  Link,
  Route,
  Routes,
  Navigate

} from 'react-router-dom';


function App() {


  const theme = createTheme({
    palette: {
      primary: {
        main: "#292F4F"
      }
    },
    shadows: {
      8: "0px 5px 5px -3px rgba(0,0,0,0.4),0px 8px 10px 1px rgba(0,0,0,0.3),0px 3px 14px 2px rgba(0,0,0,0.2)"
    }
  })




  return (

    <ThemeProvider theme={theme}>

      <CssBaseline />

      <Box sx={{backgroundColor: "primary.main"}}>
        <NavBar></NavBar>
        <Box sx={{padding: 3}}>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="items/:id" element={ <ViewOne/> }/>
        </Routes>
        {/* <Link to={`/items/632a38d1ba5831a78f9c5e0e`}>Apples</Link>
        <Link to={`/items/632b519ac1556475c984ca2b`}>Gibson</Link> */}
        {/* <ViewOne itemData={itemData}/> */}

        
        </Box>
      </Box>
    </ThemeProvider>

  );
}

export default App;
