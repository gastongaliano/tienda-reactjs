import React from "react";

const CartList = (props) => {
  const productList = (
    <ul>
      <li>Carrito:</li>
      {
        props.location.state.map(item => {
          if (item.qty) {
            return (
              <li key={item.id}>
                {item.title} {item.qty}
              </li>
            )
          }
          return false;
        })
      }
    </ul>
  );

  return productList;
}

export default CartList;