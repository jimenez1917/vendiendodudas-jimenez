import React, {useState,useEffect} from 'react';

// import ItemCount from '../ItemCount/ItemCount';
// import ItemCount from './ItemCount/ItemCount';
// const fs=require('fs');
// const pathToIdeas = './ideas.json';
import ItemList from './ItemList';
import {getAllItems} from '../../api/Products';



function ItemListContainer({greetings}){
const[items,setItems]=useState([]);

useEffect(()=>{
  getAllItems
  .then((resolve)=>{
    setItems(resolve);
  })
  
  .catch((err)=>{console.log('Error la petición');})
},[])

console.log(items);




return (
  <div>
  <div>
    <h1 style={{textAlign: 'center'}}>{greetings}</h1>
      <div style={{display: 'flex',justifyContent: 'space-around'}}>
      <ItemList Items={items}></ItemList>
      </div>

    </div>
 
  </div>
  )
};
export default ItemListContainer;