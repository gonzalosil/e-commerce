import React, { useState } from 'react'
import Item from '../Item/Item';

const ItemList = ({item}) => {
    const [product, setProduct] = useState([

    ]);

  return (
    <div className='row'>
        return(
            <div className='row'>
                {item.map(i =>      
                <div className='col-md-3' key = {i.id}>
                    <Item item = {item}/>
                </div>
                    )}
            </div>
        )
    </div>
  )
}

export default ItemList