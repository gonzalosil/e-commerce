import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './ItemCount.css'

const ItemCount = ({stockItems}) => {

    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        } 
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
        
    }

    return(
        <div className="container" id="itemcount">
            <div>
            <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
                    <Button variant="secondary" onClick={decrementarStock} >-</Button>
                    <Button variant="secondary">{counter} </Button>
                    <Button variant="secondary" onClick={incrementarStock} >+</Button>
                    <Button variant="secondary">Agregar al carrito</Button>
                </ButtonToolbar>
            </div>
        </div>  
    )
}

export default ItemCount;