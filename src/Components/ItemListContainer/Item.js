import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

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
    <Link to={`/producto/${item.id}`}>
    <ThemeProvider theme={theme}>
    <Box variant='fixed' sx={{       
        width: 200,
        height: 200,}}>
      <Grid container rowSpacing={1} columSpacing={{ xs:1 , sm:2 , md:3}}>
        <Grid items xs={12}>
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
            <CardActions sx={{display: 'flex'}}>
              <ItemCount stock={10} inicial={1} onAdd={añadir} style={{display: 'flex', justifyContent: 'center'}}></ItemCount>
            </CardActions>
          </Card>
         </Grid>
  
      </Grid>
    </Box>  

    </ThemeProvider>
    </Link>
  );
}