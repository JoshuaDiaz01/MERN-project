
import './App.css';
import { Main } from '../src/views/Main'
import {ViewOne} from './views/ViewOne'

import { createTheme, ThemeProvider, CssBaseline, Typography} from '@mui/material';
import {
  Link,
  Route,
  Routes,
  Navigate

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

      <div>
        <Typography variant="h2" color="primary">Inventori</Typography>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="items/:id" element={ <ViewOne/> }/>
        </Routes>
        {/* <Link to={`/items/632a38d1ba5831a78f9c5e0e`}>Apples</Link>
        <Link to={`/items/632b519ac1556475c984ca2b`}>Gibson</Link> */}
        {/* <ViewOne itemData={itemData}/> */}

        

      </div>
    </ThemeProvider>

  );
}

export default App;
