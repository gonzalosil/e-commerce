import React from "react";
import "./CartWidget.css";
import { useState } from "react";

const CartWidget = () => {

    const [counter, setCounter] = useState(12);

    return (
        <div className="flex-container">
            <img src={'/images/shopping_cart.png'} alt="cartwidget" width="25"
              height="25"/>
              <div className="circle-counter">
                  <p>{counter}</p>
              </div>
        </div>
    )
}

export default CartWidget;