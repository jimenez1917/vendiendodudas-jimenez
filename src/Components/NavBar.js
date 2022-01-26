import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
        <Toolbar>
        <Typography
            variant="h6"
            component="div" sx={{ flexGrow: 1 }}>
                VendiendoDudas
          </Typography>
          <Box sx={{ flexGrow: 2 }}>
            <Button color="inherit">Criptomonedas</Button>
            <Button color="inherit">Espirituales</Button>
            <Button color="inherit">Mentales</Button>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
    </Box>
  );
};
export default NavBar;