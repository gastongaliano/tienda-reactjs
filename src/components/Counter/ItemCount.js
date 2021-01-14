import React, { useState, useContext } from "react";
import { Button, TextField } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { ProductContext } from "../../App";

const ItemCount = ({ item }) => {
  const { onAddToCart, onRemoveFromCart, onSustractFromCart } = useContext(ProductContext);
  
  const [itemQty, setItemQty] = useState(item.initial);
  
  const onAdd = () => {
    if (itemQty < item.stock) {
      setItemQty(prevQty => prevQty + 1);
      onAddToCart({ ...item, qty: itemQty + 1});
    }
  };


  // useEffect(() => onAddToCart({ ...item, qty: itemQty }));

  const onSustract = () => {
    if (itemQty > 0) {
      setItemQty(prevQty => prevQty - 1)
      onSustractFromCart({ ...item, qty: itemQty - 1 })
    } else {
      console.log("acá no entra nunca...., o no debería por lo menos...")
      onRemoveFromCart(item.id)
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