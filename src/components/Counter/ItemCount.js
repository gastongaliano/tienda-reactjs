import React, {useEffect, useState} from "react";
import { Button, TextField } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";

const ItemCount = ({onAddToCart, item}) => {
	const [itemQty, setItemQty] = useState(item.initial);
	const onAdd = () => {
		if(itemQty < item.stock){
			setItemQty(prevQty => prevQty + 1);
		}
	};

	useEffect(() => onAddToCart({...item, qty: itemQty}));
	
	const onSustract = () => {
		if(itemQty > 0){
			setItemQty(prevQty => prevQty - 1)
		}
	};

	return(
			<Card>
				<CardActions>
        	<Button size="small" color="primary" variant="contained" onClick={onAdd} >+</Button>
					<TextField type='text'  variant="standard" value={itemQty} readOnly></TextField>
					<Button size="small" color="primary" variant="contained" onClick={onSustract}>-</Button>
				</CardActions>
			</Card>
    );
}

export default ItemCount;