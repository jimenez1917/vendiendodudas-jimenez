import React, {useEffect, useState} from 'react';

export default function ItemCount({stock,inicial}){
    const [Count,setCount]=useState(inicial);
    const [mensaje,setmensaje]=useState('');
    
    useEffect(() => {
        if(stock==Count || stock<=Count){
            setCount(stock)
            setmensaje("Este es el máximo de compras que puedes realizar");
        }else{
            setmensaje("");
        }
    },[Count]);

    function suma(){
         setCount(Count+1);
    }
    function resta(){
        if(Count>0){
        setCount(Count-1)
    }else{
        setCount(0)
    }

    }
    return(
        <div className="ItemCount">
            <button onClick={suma}>sumar</button>
            <button onClick={resta}>restar</button>
            <button onClick={suma}>Añadir</button>
            <p>{Count}</p>
            <p>{mensaje}</p>
        </div>
    )
}