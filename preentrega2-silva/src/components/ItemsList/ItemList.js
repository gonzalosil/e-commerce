import React from 'react'
import Item from '../Item/Item';


const ItemList = ({item}) => {
  return (
    <div className='row' id='itemlist'>
      {
      item.map(item=>
      
      <div className='col-lg-5'
       key={item.id}>
       <Item item={item}/> 
       </div>
      )   
      }
   </div>
  )
}

export default ItemList