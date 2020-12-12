import React, {useState} from "react";

const ItemCount = (props) => {
	const [itemQty, setItemQty] = useState(0);

	const onAdd = () => {
		if(itemQty < props.stock){
			setItemQty(itemQty + 1)
			console.log("agregado")
		} else {
			alert("no hay más cuadros")
		}
	};
	const onSustract = () => {
		if(itemQty > 0){
			setItemQty(itemQty - 1)
		}
	};

	return(
			<>
        <button onClick={onAdd} >+</button>
				<input value={itemQty} onInput={handleChange}></input>
				<button onClick={onSustract}>-</button>
			</>
    );
}

export default ItemCount;