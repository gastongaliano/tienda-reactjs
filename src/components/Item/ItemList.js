import React from "react";
import Item from "./Item";
import ItemCount from "../Counter/ItemCount";
import { Link } from 'react-router-dom';


const ItemList = ({ item }) => {
  return (
    <>
      <Link
        to={{
          pathname:`/obras/category/${item.category}/item/${item.id}`,
          state: {...item}
        }}
      >
        <Item item={item}/>
      </Link>
    </>
  );
}

export default ItemList;