import React from "react";
import Item from "./Item";
import ItemCount from "../Counter/ItemCount";
import { Link } from 'react-router-dom';


const ItemList = ({ item }) => {
  return (
    <>
      <Link
        to={{
          pathname:`/obras/${item.category}/${item.id}`,
          state: {...item}
        }}
      >
        <Item item={item}/>
      </Link>
      <ItemCount item={item} />
    </>
  );
}

export default ItemList;