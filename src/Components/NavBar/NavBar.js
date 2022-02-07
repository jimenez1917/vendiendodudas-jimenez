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
            <Button color="inherit">Criptomonedas</Button>
            <Button color="inherit">Espirituales</Button>
            <Button color="inherit">Mentales</Button>
          </Box>
          <p>3</p>
          
          <CardWidget></CardWidget>
          <Button color="inherit">Login</Button>

        </Toolbar>
    </AppBar>
    </Box>
    </ThemeProvider>
  );
};
export default NavBar;