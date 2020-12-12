import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
	return (
		<section>
			<h1>{props.greeting}</h1>
			<ul>
				{
					props.productList.map(item => 
							<>
								<li key={item.id}>{item.name}. Stock actual: {item.stock}</li>
								<ItemCount stock={item.stock}/>
							</>	
					)}
			</ul>
		</section>
	);
}

export default ItemListContainer;