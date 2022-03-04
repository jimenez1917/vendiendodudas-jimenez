import React,{useState,useEffect} from 'react';
import {getItemById} from '../../api/Products';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer(){
    
    const[itemId,setItemId]=useState({});
    const { id }=useParams();
    // const[itemsa,setItemsa]=useState([]);

    // useEffect(() =>{
      
    // },[]);
    useEffect(() =>{
      getItemById(id).then((results)=>{setItemId(results);});
    },[]);
    
    // console.log(id);
    // useEffect(()=>{
    //   let item=itemsa.find(u=>u.id===1);
    //   setItemId(item);
    // },[itemsa])
    



    return <ItemDetail itemid={itemId}></ItemDetail>
}