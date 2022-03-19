
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';
import './Widget.css';

const CardWidget =()=> {
    const {CantidadProductos} = useContext(CartContext);

    return(
        <>
        { 
            !CantidadProductos ? (<>
            </>):(
                <Link to='/cart'>
                    <div className="Widget">
                    <span>
                        {CantidadProductos}
                    </span>
                    <ShoppingCartIcon className="CartWidget" />
                    </div>
                </Link>
            )
        }

        </>
        )
}
export default CardWidget;
