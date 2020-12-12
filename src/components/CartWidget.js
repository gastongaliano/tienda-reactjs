import React from "react";
import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () => {
    return(
        <a href='#'> <FaShoppingCart className='FaShoppingCart'/>Carro Vacio</a>
    );
}

export default CartWidget;