import React, {useState,useContext} from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemListContainer/ItemCount';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/CartContext';


export default function ItemDetail({itemid}) {
  const [itemCount,setItemCount] = useState();
  const {addItem,SumarPrecio }=useContext(CartContext);

  function añadir(cantidad){
    // console.log(`Se agregan ${cantidad} productos al carrito`);
    setItemCount(cantidad);
    addItem(cantidad,itemid);
    SumarPrecio(itemid.price,cantidad);
  }
  
   return (
    <div>

    <div className="titlecard">
        <h1>Que linda elección </h1>           
    </div>
    {itemid.length === 0 ? (<>
        <h2>Este producto no existe</h2>
        <Link to='/'>Home</Link>     
    </>) : (
    <div className='item-detail'>
      <img src={itemid.img} alt="Imagen del producto" />
      <div className='right-column'>
        <div className='details'>
          <h1>{itemid.title}</h1>
          <p className='price'>USD {itemid.price}</p>
          <p className='description'>{itemid.description}</p>
          {
            !itemCount ?
            <ItemCount stock={10} inicial={1} onAdd={añadir} /> :
              <Link className='button' to='/cart'>
                <button> 
                  Terminar Compra
                </button>
              </Link>
          }

        </div>
      </div>
    </div>
    
    )};
  </div>
   )
}