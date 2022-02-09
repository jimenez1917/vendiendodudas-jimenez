import React,{useState,useEffect} from 'react';
import {getItemById} from '../../api/Products';
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer(){
    
    const[itemId,setItemId]=useState([]);
    // const[itemsa,setItemsa]=useState([]);

    // useEffect(() =>{
      
    // },[]);
    useEffect(() =>{
      getItemById.then((results)=>{setItemId(results);});
    },[])
    // useEffect(()=>{
    //   let item=itemsa.find(u=>u.id===1);
    //   setItemId(item);
    // },[itemsa])
    
    console.log(itemId);



    return <ItemDetail itemid={itemId}></ItemDetail>
}