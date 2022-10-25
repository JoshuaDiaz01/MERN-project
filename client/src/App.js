import Container from '@mui/material/Container';
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

  let Joshua = require("./components/images/IMG_0118.jpg")
  let Adrian = require("./components/images/adrian.jpeg")
  let stickFigure = require("./components/images/stick_figure_2.png")
  let Eye = require("./components/images/eye_2.png")

  const AboutUs = (props) => {
    return (
      <div class="container">
        <h1 style={{ color: "#b2abf2", textAlign: "center", fontFamily: "sans-serif", fontSize: "500%" }}>About The Developers of Inventori
        </h1>
        <div style={{ color: "#b2abf2", textAlign: "center", margin: "20px" }}>
          <div>
            <h1 style={{ margin: "20px", fontSize: "250%" }}>Full Stack Developer: Adrian Dowst</h1>
            <div style={{ display: "flex" }}>
              <img src={Adrian} alt="Adrian" style={{ borderRadius: "100%", height: "300px", width: "337.5px" }}></img>
              <h1 style={{ marginTop: "90px", marginLeft: "100px" }}>Adrian Dowst is a former Chemistry educator turned Full Stack Developer. I love working on projects that package useful, interactive features with great design!

                <a style={{ marginLeft: "20px", color: "#b2abf2" }} href="https://github.com/aadowst">GitHub</a> <a style={{ marginLeft: "20px", color: "#b2abf2" }} href="https://www.linkedin.com/in/adrian-dowst/">LinkedIn</a> </h1>

            </div>
          </div>
          <div>
            <h1 style={{ margin: "20px", fontSize: "250%" }}>SCRUM Leader, Full Stack Developer: Joshua Diaz</h1>
            <div style={{ display: "flex" }}>
              <img src={Joshua} alt="joshua" style={{ borderRadius: "100%", height: "337.5px", width: "350.5px" }}></img>
              <h1 style={{ marginTop: "90px", marginLeft: "100px" }}>Joshua Diaz is a motivated Developer with a passion in all things Science and Technology! His favorite languages are Java and JavaScript!
                <a style={{ marginLeft: "20px", color: "#b2abf2" }} href="https://github.com/JoshuaDiaz01">GitHub</a> <a style={{ marginLeft: "20px", color: "#b2abf2" }} href="https://www.linkedin.com/in/joshuadiaz93117/">LinkedIn</a> </h1>
            </div>
          </div>
          <div>
            <h1 style={{ margin: "20px", fontSize: "250%" }}>Full Stack Developer: Angel Ruvalcaba</h1>
          </div>
          <div>
            <h1 style={{ margin: "20px", fontSize: "250%" }}>Full Stack Developer: Patrick Huynh</h1>
          </div>
        </div>
      </div>

    );
  }


  return (

    <ThemeProvider theme={theme}>

      <CssBaseline />

      <Box sx={{ backgroundColor: "primary.main" }}>
        <NavBar></NavBar>
        <Box sx={{ padding: 3 }}>
          <Routes>
            <Route path="/aboutUs" element={<AboutUs />} />
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
