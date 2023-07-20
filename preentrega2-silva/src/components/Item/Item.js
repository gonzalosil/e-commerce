import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


const Items = ({item}) => {
    return (
        <div>
        <Link className = 'product_card' to = {"/Item/" + item.id}>
            <Card className="text-center">
            <Card.Img variant="top" src={item.img} className='img-fluid' />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
            </Card.Body>
            </Card>
        </Link>
        </div>
    );
}

export default Items



// function ImgOverlayExample() {
//   return (
//     <Card className="bg-dark text-white">
//       <Card.Img src="holder.js/100px270" alt="Card image" />
//       <Card.ImgOverlay>
//         <Card.Title>Card title</Card.Title>
//         <Card.Text>
//           This is a wider card with supporting text below as a natural lead-in
//           to additional content. This content is a little bit longer.
//         </Card.Text>
//         <Card.Text>Last updated 3 mins ago</Card.Text>
//       </Card.ImgOverlay>
//     </Card>
//   );
// }

// export default ImgOverlayExample;