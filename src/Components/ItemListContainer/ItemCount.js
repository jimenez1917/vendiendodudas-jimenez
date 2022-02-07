import React, {useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function ItemCount({stock,inicial,onAdd}){
    const [count,setCount]=useState(inicial);
    const [mensaje,setmensaje]=useState('');
    
    useEffect(() => {
        if(stock==count || stock<=count){
            setCount(stock)
            setmensaje("Este es el máximo de compras que puedes realizar");
        }else{
            setmensaje("");
        }
    },[count]);

    function suma(){
         setCount(count+1);
    }
    function resta(){
        if(count>0){
        setCount(count-1)
    }else{
        setCount(0)
    }


    }
    return(
        <div className="ItemCount">
            <p>{mensaje}</p>
            <Box
                    sx={{
                        width: 325,
                        height: 100,
                        display: 'flex', 
                        alignItems: 'center',
                        borderStyle: 'solid'
                        }}
            >
                <Grid container rowSpacing={1} sx={{marginBottom:-3}}>
                    <Grid xs={5.5}>
                        <IconButton>
                            <RemoveIcon onClick={resta} />
                        </IconButton>
                    </Grid>
                    <Grid xs={3}>
                        <Avatar>{count}</Avatar>
                    </Grid>
                    <Grid xs={3}>
                        <IconButton>
                            <AddIcon onClick={suma}/>
                        </IconButton>
                    </Grid>
                    <Grid xs={12}>
                        <Button 
                        variant="contained" 
                        sx={{width:'100%',color:'primary'}} 
                        onClick={()=>onAdd(count)}>Añadir</Button>
                    </Grid>
                </Grid>
                {/* <Grid container spacing={2}>

                </Grid> */}
            </Box>
    </div>
  );
}