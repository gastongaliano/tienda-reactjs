import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";


const CartWidget = (props) => {
  const [listDisplay, setListDisplay] = useState(false);
  const list = (
    <ul>
      {
        props.inCart.map(item => {
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

  return (
    <>
      <FaShoppingCart style={{ padding: "2 0 0 2" }} onClick={() => setListDisplay(!listDisplay)} className='FaShoppingCart' />
      {listDisplay ? list : false}
    </>
  );
}

export default CartWidget;