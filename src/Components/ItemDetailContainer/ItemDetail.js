// import React from 'react';
// // import {Link} from 'react-router-dom';
// import CardMedia from '@mui/material/CardMedia';

// export default function ItemDetail({itemid}){
//     return(
//         <div>
//             <div>
//                 <img src='{itemid.img}' alt ='david'/>
//             </div>
//         <ul>
//             <p>{itemid.title}</p>
//             <p>{itemid.description}</p>
//             <p>{itemid.price}</p>
//         </ul>
//         </div>
//     )
// }
import React, {useState,useContext} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemListContainer/ItemCount';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {CartContext} from '../../context/CartContext';



const theme = createTheme({
  palette: {
    primary:{
      main: '#818570',
    },
    secondary:{
      main: '#CFC6BE',
    },
    paddingTop: '50px',
    marginTop: '50px',
  }
})

export default function ItemDetail({itemid}) {
  const [itemCount,setItemCount] = useState();
  const {addItem, cart, SumarPrecio }=useContext(CartContext);

  function añadir(cantidad){
    // console.log(`Se agregan ${cantidad} productos al carrito`);
    setItemCount(cantidad);
    addItem(cantidad,itemid);
    SumarPrecio(itemid.price,cantidad);
  }
  
   return (

    <ThemeProvider theme={theme}>
    <center>
    <Box variant='fixed' sx={{       
        width: 500,
        height: 500,
        flexgrow: 1,}}>
      <Grid container rowSpacing={2} columSpacing={{ xs:1 , sm:2 , md:3}}>
        <Grid items xs={8.5}>
          <Card sx={{ maxWidth: 600 }}>
            <CardMedia
              component = "img"
              height="250"
              image={itemid.img}
              alt={itemid.title}
              sx={{borderRadius:"18px"}}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {itemid.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {itemid.description}
              </Typography>
              <Typography variant="h4" color="text.secondary">
                {itemid.price}
              </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex'}}>
              {
                !itemCount ?
                <ItemCount stock={10} inicial={1} onAdd={añadir} style={{display: 'flex', justifyContent: 'center'}} /> :
                <Link to='/cart'>Terminar Compra</Link>
              }


            </CardActions>
          </Card>
         </Grid>
  
      </Grid>
    </Box>  
    </center>
    </ThemeProvider>

  );
}