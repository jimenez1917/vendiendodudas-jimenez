import React, {useState,useEffect} from 'react';

// import ItemCount from '../ItemCount/ItemCount';
// import ItemCount from './ItemCount/ItemCount';
// const fs=require('fs');
// const pathToIdeas = './ideas.json';
import ItemList from './ItemList';
import {getAllItems} from '../../api/Products';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router-dom';




function ItemListContainer({greetings}){
const[items,setItems]=useState([]);
const { category } = useParams();
console.log(category);
useEffect(()=>{
  getAllItems
  .then((resolve)=>{
    if(!category) {
      setItems(resolve);
    }
    else{
      let a=resolve.filter((item)=>item.category==category);
      setItems(a);
    }
  }) 
  .catch((err)=>{console.log('Error la petición');})
},[category])


return (
  <div>
  <div>
    <h1 style={{textAlign: 'center'}}>{greetings}</h1>
      <div style={{display: 'flex',justifyContent: 'space-around'}}>
      <ItemList Items={items}></ItemList>
       </div>
      <div style={{display: 'flex'}}>
      </div>

    </div>
 
  </div>
  )
};
export default ItemListContainer;