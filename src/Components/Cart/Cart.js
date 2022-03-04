import { Button } from '@mui/material';
import React, {useContext, useState} from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ()=> {
    const {cart, vaciarCarrito, deleteItemId , TotalPrice , CantidadProductos, OrdenDeCompra, TotalPriceGuardar} = useContext(CartContext)
    const [OrdenCart,setOrdenCart] = useState([]);


    function ordenar(){
        const orden = cart.map((res)=> { return {
            "id":res.id,
            "title": res.title,
            "price":res.price
        }})
        setOrdenCart(orden);
        OrdenDeCompra(orden,TotalPrice);
        console.log(orden);
        console.log(TotalPrice);

    }



    return (
        <>
        <p>hola mundo</p>
            {cart.length === 0 ? (<>
                <h2>Aun no hay productos</h2>
                <Link to='/'>Home</Link>     
            </>) : (
        <>
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Cantidad</th>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
            <th scope="col">Eliminar Producto</th>
            </tr>
        </thead>
          {cart.map((product)=>(
            <tbody>
                    <tr key={product.id}>
                    <th scope="row">{product.cantidad}</th>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.img}</td>
                    <td><button onClick={()=>deleteItemId(product.id,product.cantidad,product.price)}> X </button></td>
                    </tr>
            </tbody>
        ))}
    </table>   
    <div>
        <button  
            onClick={vaciarCarrito} style={{color:"Black"}}>
                Vaciar Carrito
        </button>
    </div>
    <div>
        <Link to="/item/add">
        <button  to="/item/add"
            onClick={()=>ordenar()} style={{color:"Black"}}>
                Orden de Compra
        </button>  
        </Link>
              <h2>Cantidad = {CantidadProductos}</h2>
              <h1>Total={TotalPrice} USD</h1>       
    </div>
 
    </>
    )}
    </>
    )
}
export default Cart;