import React from 'react';
import Item from './Item';

export default function ItemList({Items}){
    return (
        <>
        {Items.map((item)=>(
            <Item key={item.id} item={item}/>
        ))}
        </>
    )
}