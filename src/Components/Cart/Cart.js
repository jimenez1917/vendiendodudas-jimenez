import { Button } from '@mui/material';
import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';

const Cart = ()=> {
    const {cart, vaciarCarrito, deleteItemId } = useContext(CartContext)
    console.log(cart);
    return (
        <>
        <p>hola mundo</p>
            {cart.length === 0 ? (<>
            <h2>Aun no hay productos</h2>
            <Link to='/'>Home</Link> </>) : (
                <>            
                {cart.map((product)=>(
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <h3>{product.cantidad}</h3>
                        <button onClick={()=>deleteItemId(product.id)}>Eliminar</button>
                    </div>
                ))} 
                <button  onClick={vaciarCarrito}>
                    Vaciar Carrito
                </button>              
                </>
            )}
        </>
    )
}

export default Cart;