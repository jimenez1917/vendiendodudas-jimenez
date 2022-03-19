import React, {useState,useEffect} from 'react';
import ItemList from './ItemList';
import {getAllItems} from '../../api/Products';
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
      let a=resolve.filter((item)=>item.category===category);
      setItems(a);
    }
  }) 
  .catch((err)=>{console.log('Error la petición');})
},[category])


return (
  <div>
          <h1>{greetings}</h1>
          <div>
            <ItemList Items={items}></ItemList>
          </div>
    </div>
  )
};
export default ItemListContainer;