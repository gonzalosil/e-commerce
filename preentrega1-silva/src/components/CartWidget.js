import React from "react";
import "./CartWidget.css";
import { useState } from "react";

const CartWidget = () => {

    const [counter, setCounter] = useState(0);

    return (
        <div class="flex-container">
            <img src={'shopping_cart.png'} alt="cartwidget" width="25"
              height="25"/>
              <p>{counter}</p>
        </div>
    )
}

export default CartWidget;