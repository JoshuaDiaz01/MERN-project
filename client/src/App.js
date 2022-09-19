
import './App.css';
import { InteractiveList } from '../src/components/List'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline, Typography } from '@mui/material'

function App() {

  const theme = createTheme({


    palette: {
      primary: {
        main: '#292F4F'
      },
      warning: {
        main: '#f24f5b'
      },
      success: {
        main: '#26b58a'
      },
      secondary: {
        main: '#b2aBF2'
      },
      info: {
        main: '#f0e2a3'
      }

    }
  })
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Typography variant="h3" color="primary">Inventori</Typography>

        <InteractiveList />
      </ThemeProvider>
    </div>
  );
}

export default App;
