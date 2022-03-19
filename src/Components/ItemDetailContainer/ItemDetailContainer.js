import React,{useState,useEffect} from 'react';
import {getItemById} from '../../api/Products';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer(){
    
    const[itemId,setItemId]=useState({});
    const { id }=useParams();
    useEffect(() =>{
      getItemById(id).then((results)=>{setItemId(results);});
    },[]);



    return <ItemDetail itemid={itemId}></ItemDetail>
}