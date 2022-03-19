import React, {useEffect, useState} from 'react';
import './ItemCount.css';

export default function ItemCount({stock,inicial,onAdd}){
    const [count,setCount]=useState(inicial);
    
    useEffect(() => {
        if(stock===count || stock<=count){
            setCount(stock)
        }
    },[count]);

    function suma(){
         setCount(count+1);
    }
    function resta(){
        if(count>0){
        setCount(count-1)
    }else{
        setCount(0)
    }


    }
    return(
        <div className='item-count-container'>
            <div className='counter-container'>
                <button onClick={resta}>-</button>
                    <p>{count}</p>
                <button onClick={suma}>+</button>
            </div>
        <button className='add-to-cart-button' onClick={()=>onAdd(count)}>Agregar al carrito</button>
      </div>
  );
}