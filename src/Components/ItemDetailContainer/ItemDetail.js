import React from 'react';

export default function ItemDetail({itemid}){
    return(
        <>
        <img src={itemid.img} style={{width: '5%', height: '5%'}}/>
        <ul><p>{itemid.title}</p>
        <p>{itemid.description}</p>
        <p>{itemid.price}</p>
        </ul>
        </>
    )
}