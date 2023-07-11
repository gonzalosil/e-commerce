import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Items.css'

const Items = (props) => {
    return (
        <div className='items'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                <Card.Title>{props.type}</Card.Title>
                <Card.Text>
                    {props.material}
                </Card.Text>
                <Button variant="primary">Mas informacion</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Items