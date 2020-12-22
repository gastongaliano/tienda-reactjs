import { Grid } from "@material-ui/core";
import ItemCount from "./Counter/ItemCount";
import Item from "./Item/Item";

function ItemListContainer(props){
	
	return (
		<Grid container spacing={2}>
			{
				!props.productList &&
				<p>Loading...</p>
			}
			{	props.productList &&
				props.productList.map(item => {
				return (
					<Grid item xs={12} sm={4}>
						<Item item={item} />
						<ItemCount onAddToCart={props.onAddToCart} item={item}/>
					</Grid>
				)
			})}
		</Grid>

	);
}

export default ItemListContainer;