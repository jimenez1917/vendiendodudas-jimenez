import React from 'react';
// import ItemCount from '../ItemCount/ItemCount';
// import ItemCount from './ItemCount/ItemCount';

function ItemListContainer({productos}){
return (
  <div>
  <div>
          <ul className='ItemListContainer'>
              <il type="list">- {productos}</il> 
          </ul>     
          {/* <ItemCount stock = {3}></ItemCount> */}
    </div>
 
  </div>
  )
};
export default ItemListContainer;