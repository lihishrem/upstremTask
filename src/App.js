import { ThemeProvider, createTheme } from "@material-ui/core/styles"
import {Grid, Paper, Switch} from "@material-ui/core";
import { useState } from "react";

import Home from "./Components/Home";
import DrawerComp from "./Components/DrawerComp";
import Reservations from "./Components/Reservations";

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import { Back } from "./Components/Back";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette:{
      type: darkMode? "dark" : "light"
    }
  })
  return (
  <Grid container>
    <ThemeProvider theme={theme}>
      <Router>
         <Paper style={{width:"100vw", height:"100vh"}}>
           <Grid container spacing={3}>
             <Grid item xs={12} container>
               <Grid item xs={11}>
                 <WbSunnyIcon/>
                <Switch checked={darkMode} onChange={()=> setDarkMode(!darkMode)}/>
                <DarkModeIcon/>
               </Grid>
               <Grid item xs={1}>
                 <Back/>
               </Grid>
             </Grid>
            <Grid item xs={12} container>
              <DrawerComp></DrawerComp>
            </Grid>
            <Grid item xs={12} style={{position:"absolute", top:"30vh", width:"inherit"}}>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/reservations' element={<Reservations/>} />  
            </Routes>
            </Grid>  
          </Grid>
        </Paper> 
        </Router>
      </ThemeProvider>
    </Grid>)
}

export default App;
