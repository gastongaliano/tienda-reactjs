import React, { useContext } from "react";
import { CartContext } from "../../App";

const CartList = () => {
  const { cart } = useContext(CartContext);
  const { cartList = [], removeFromCart } = cart;
  const productList = (
    <ul>
      {
         !cartList.length &&
        <p>Todavía no hay obras en el carrito</p>
      }
      {
        cartList.map(item => {
          if (item.qty) {
            return (
              <li key={item.id}>
                {item.title} {item.qty}
                <button onClick={ () => removeFromCart(item.id) }>X</button>
              </li>
            )
          }
          return false;
        })
      }
    </ul>
  );
  
    console.log("cartList", cartList)
  
  return productList;
}

export default CartList;