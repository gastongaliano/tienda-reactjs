import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";
import CartTable from "./CartTable";

const CartList = () => {
  const { cart } = useContext(CartContext);
  const { cart: cartList = [], onRemoveFromCart } = cart;
  
  const [formattedList, setFormattedList] = useState(cartList);

  useEffect(() => {
    const listForTable = cartList.map( item => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          qty: item.qty,
          total: item.price * item.qty
        }
      });
    setFormattedList(listForTable);
  },[setFormattedList, cartList])
  const total = cartList.reduce((acc, curr) => acc + curr.qty * curr.price, 0); 
  
  const emptyCart = !cartList.length && <p>Todavía no hay obras en el carrito</p>;
  
  const productList = (
    <>
      <ul>
        {
          cartList.map(item => {
              return (
                <li key={item.id}>
                  {item.title} CANT: {item.qty} PRECIO: $ {item.price * item.qty}
                  <button onClick={ () => onRemoveFromCart(item.id) }>X</button>
                </li>
              )
          })
        }
        <div>
          TOTAL: {total}
        </div>
      </ul>
    <CartTable cart={formattedList} onRemoveFromCart={onRemoveFromCart}/>
    </>

  );
  
    console.log("cartList:", cartList)
  
  return emptyCart || productList;
}

export default CartList;