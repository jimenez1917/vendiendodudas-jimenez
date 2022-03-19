import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';
import { Link } from 'react-router-dom';

export default function Item({item}) {
  return (
    <div className='item-container'>
      <Link to={`/producto/${item.id}`}>
        <img className ='image' src={item.img} alt="Imagen del artículo" />
        <div className='detail-container'>
          <p className='item-title'>{item.title}</p>
          <p className='item-price'>{item.price}K COP</p>
        </div>
      </Link>
    </div>
    );
}