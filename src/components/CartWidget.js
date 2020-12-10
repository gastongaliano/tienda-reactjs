import React from "react";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";


const CartWidget = () => {
    return(
        <a href='#'> <FaShoppingCart className='FaShoppingCart'/>Carro Vacio</a>
    );
}

export default CartWidget;