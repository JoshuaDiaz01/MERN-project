
import './App.css';
import { Main } from '../src/views/Main'
import {ViewOne} from './views/ViewOne'
import NavBar from "./components/NavBar";

import { createTheme, ThemeProvider, CssBaseline, Typography, Box} from '@mui/material';
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
    }
  })

  // useEffect(() => {
  //   getItemById("632a38d1ba5831a78f9c5e0e")
  //     .then((data) => {
  //       setItemData(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }, [])


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
