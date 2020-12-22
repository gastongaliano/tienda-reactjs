import './App.css';
import ItemListContainer from './components/ItemListContainer';
import getProducts from './services/productService';
import React, {useState} from 'react';
import { Grid } from "@material-ui/core";
import Header from "./components/Header/Header";

function App() {

	const [productList, setProductList] = useState();

	getProducts()
		.then(data => { 
			setProductList(data);
		})

	const addedToCart = [];

	const addToCart = (product) => {
		if (!addedToCart.some(item => item.id === product.id)){
			addedToCart.push(product);
			return;
		}
		addedToCart.forEach(item => { 
			if (item.id === product.id){
				item.qty = product.qty;
			}
		})
	};

  return (
    <Grid container direction="column">
      <Grid item>
        <Header inCart={addedToCart}/>
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <ItemListContainer onAddToCart={addToCart} productList={productList} greeting ="En breve abrimos"/>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;