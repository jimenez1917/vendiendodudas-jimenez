import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

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

export default function Item({item}) {
  function añadir(cantidad){
    console.log(`Se agregan ${cantidad} productos al carrito`);
  }
  return (
    <ThemeProvider theme={theme}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component = "img"
        height="250"
        image={item.img}
        alt="green iguana"
        sx={{borderRadius:"18px"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'felx'}}>
        <ItemCount stock={10} inicial={1} onAdd={añadir} style={{display: 'flex', justifyContent: 'center'}}></ItemCount>
      </CardActions>
    </Card>
    </ThemeProvider>
  );
}