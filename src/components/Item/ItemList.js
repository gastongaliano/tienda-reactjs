import React from "react";
import Item from "./Item";
import ItemCount from "../Counter/ItemCount";
import { Link } from 'react-router-dom';
const ItemList = ({ onAddToCart, item }) => {
  return (
    <>
      <Link to={{
          pathname:"/obras/category/2",
          state: {...item}
        }}> <Item item={item} /> </Link>
      <ItemCount onAddToCart={onAddToCart} item={item} />
    </>
  );
}

export default ItemList;