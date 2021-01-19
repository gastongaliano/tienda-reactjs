import React, { useState } from "react";
import { Button, TextField } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";

const ItemCount = ({ item, setQty, add, sustract }) => {

console.log('item initial', item.initial);

  const [itemQty, setItemQty] = useState(item.initial || 0);
  console.log('itemQty', itemQty);
  const onAdd = () => {
    if (itemQty < item.stock) {
      setItemQty(prevQty => prevQty + 1);
      setQty(prevQty => prevQty + 1);
      // onAddToCart({ ...item, qty: itemQty + 1});
    }
  };

  const onSustract = () => {
    if (itemQty > 0) {
      setItemQty(prevQty => prevQty - 1);
      setQty(prevQty => prevQty - 1);
      // onSustractFromCart({ ...item, qty: itemQty - 1 })
    } else {
      console.log("acá no hace nada...")
      // onRemoveFromCart(item.id)
    }
  };

  return (
    <Card>
      <CardActions>
        <Button size="small" color="primary" variant="contained" onClick={onAdd} >+</Button>
        <TextField type='text' variant="standard" value={itemQty} readOnly></TextField>
        <Button size="small" color="primary" variant="contained" onClick={onSustract}>-</Button>
      </CardActions>
    </Card>
  );
}

export default ItemCount;