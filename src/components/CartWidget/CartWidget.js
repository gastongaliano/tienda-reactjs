import React, {useState} from "react";
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
	
	return(
		<>
        <p> <FaShoppingCart onClick={()=>setListDisplay(!listDisplay)} className='FaShoppingCart'/> Lista de Compras</p>
				{listDisplay ? list : false}
		</>
  );
}

export default CartWidget;