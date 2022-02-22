
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';

const CardWidget =()=> {
    const {CantidadProductos} = useContext(CartContext);

    return(
        <>
        { 
            !CantidadProductos ? (<>
                <p></p>
            </>):(<>
                <h5>{CantidadProductos}</h5>
                <Link to='/cart'>
                <ShoppingCartIcon className="CartWidget">
                </ShoppingCartIcon>
                </Link>
                
            </>)
        }

        </>
        )
}
export default CardWidget;
