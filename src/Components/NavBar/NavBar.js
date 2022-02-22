import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@emotion/react';
// import theme from '/NavBarcss';
import { createTheme } from '@mui/material/styles';
import { purple, orange} from '@mui/material/colors';
import CardWidget from '../CardWidget/CardWidget.js';
import { NavLink } from 'react-router-dom';
// import logo from './images/armucura1';
// import CantidadAcomprar from './ItemListContainer/ItemListContainer'

const theme = createTheme({
    palette: {
      primary:{
        main: '#818570',
      },
      secondary:{
        main: '#CFC6BE',
      }
    }
})

const NavBar = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1,}}>
    <AppBar position="static" color="primary">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            {/* <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/aretes'>aretes</NavLink></li>
            <li><NavLink to='/collares'>collares</NavLink></li>
            <NavLink to='/pulseras'>pulseras</NavLink> */}
            <Button color="inherit">
              <NavLink to='/' className="nav">home</NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to='/category/collares'>Collares</NavLink>
            </Button>
            <Button color="inherit">
              <NavLink to='/category/aretes'>aretes</NavLink>
            </Button>
            <Button color="primary">
              <NavLink to='/category/anillos'>anillos</NavLink>
            </Button>
          </Box>
            
          <CardWidget></CardWidget>
          <Button color="inherit">Login</Button>

        </Toolbar>
    </AppBar>
    </Box>
    </ThemeProvider>
  );
};
export default NavBar;