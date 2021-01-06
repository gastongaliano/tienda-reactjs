import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget2 = (props) => {
  return (
    <FaShoppingCart style={{ padding: "2 0 0 2" }} onClick={props.renderCart} className='FaShoppingCart' />
  );
}

export default CartWidget2;