import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import {Link} from 'react-router-dom';
import './Cart.css';

const Cart = ()=> {
    const {cart, vaciarCarrito, deleteItemId , TotalPrice , CantidadProductos, OrdenDeCompra} = useContext(CartContext)


    function ordenar(){
        const orden = cart.map((res)=> { return {
            "id":res.id,
            "title": res.title,
            "price":res.price
        }})
        OrdenDeCompra(orden,TotalPrice);
    }



    return (
        <div>
            <div className="titlecard">
                <h1>Tu Carrito</h1>           
            </div>
        {cart.length === 0 ? (<>
                <h2>Aun no hay productos</h2>
                <Link to='/'>Home</Link>     
            </>) :
            (<>
            <div className="actions">
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                <h3>#{CantidadProductos}</h3>
                <h3>${TotalPrice}US</h3>       
                <Link to="/item/add">
                    <button  to="/item/add"
                        onClick={()=>ordenar()}>
                            Orden de Compra
                    </button>  
                </Link>
            </div>
            <div className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Eliminar Producto</th>
                    </tr>
                </thead>
            {cart.map((product)=>(
                <tbody  key={product.id}>
                    <tr>
                        <td><img src={product.img} alt={product.title} /></td>
                        <th scope="row">{product.cantidad}</th>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td><button onClick={()=>deleteItemId(product.id,product.cantidad,product.price)}> X </button></td>
                    </tr>
                </tbody>
            ))}
            </div>             
            </>)
        }
        </div>
    )
}
export default Cart;