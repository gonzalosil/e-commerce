import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import Image from 'react-bootstrap/Image';
import './ItemDetail.css'

const ItemDetail = ({item}) => {
  return (
    <div className='row'>
      {/* <Image src={item.img} fluid /> */}
       {/* <img src={item.img} className='img-fluid'alt={item.name} float='left'/> */}
     <div className='col'>
        <img src={item.img} alt={item.name} />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p> $ {item.price}</p>
        <p> Cantidad: {item.stock}</p>
        <ItemCount stockItems={10}/>
     </div>
     <div className='col'>
        {/* <img src={item.img} className='img-fluid' alt={item.name} float='left'/> */}
        {/* <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p> $ {item.price}</p>
        <p> Cantidad: {item.stock}</p>
        <ItemCount stockItems={10}/> */}
     </div>
     </div>
  )
}

export default ItemDetail