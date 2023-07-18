import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'
import { Link } from 'react-router-dom';

const Items = ({item}) => {
    return (
        <Link to = {"/Item/" + item.id} className='text-decoration-noe'>
            <div className='container'>
                <div className='card border border-0'>
                    <img src = {item.imagen} className='card-img-top' alt = {item.nombre}/>
                    <div className='card-body text-center'>
                        <p className='card-text'>{item.nombre}</p>
                    </div>
                </div>
            </div>
        </Link>
        // <div className='item'>
        //     {/* <Card style={{ width: '18rem' }}>
        //         <Card.Img variant="top" src={props.img} />
        //         <Card.Body>
        //         <Card.Title>{props.type}</Card.Title>
        //         <Card.Text>
        //             {props.material}
        //         </Card.Text>
        //         <Button variant="primary">Mas informacion</Button>
        //         </Card.Body> */}
        //     </Card>
        // </div>
    );
}

export default Items