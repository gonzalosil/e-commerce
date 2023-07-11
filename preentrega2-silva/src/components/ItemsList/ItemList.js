import React, { useState } from 'react'
import Items from '../Items/Items';

const ItemList = () => {
    const [product, setProduct] = useState([
        {
            id:1,
            type:'Espejo',
            material:'Madera paraiso',
            img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/114/549/products/64133d8a-883f-430e-9342-3ab97ad3c64f_nube-259b6dab8a3ff44f5816045325571438-640-0.jpg"
        },{
            id:2,
            type:'Escritorio',
            material:'Madera guayubira',
            img: "https://http2.mlstatic.com/D_NQ_NP_779591-MLA50309835899_062022-O.webp"
        },{
            id:3,
            type:'Estanteria',
            material:'Metal',
            img: "https://http2.mlstatic.com/D_NQ_NP_799022-MLA50018656101_052022-O.webp"
        },{
            id:4,
            type:'Perchero',
            material:'Madera paraiso',
            img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/131/823/products/_mar5310b1-9cab9a0598cbc2ac8d16105560278759-480-0.jpg"
        }
    ]);

  return (
    <div className='row'>
        {product.map((p)=>{
            return(
                <div><Items
                    key = {p.id}
                    type = {p.type}
                    material = {p.material}
                    img = {p.img}
                />
                </div>
            )
        })}
    </div>
  )
}

export default ItemList