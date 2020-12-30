import { Grid } from "@material-ui/core";
import getProducts from '../services/productService';
import ItemList from "../components/Item/ItemList";
import CartWidget from '../components/CartWidget/CartWidget';
import React, { useState } from 'react';
import Header from "../components/Header/Header";

function Product() {
  const [productList, setProductList] = useState();
  const [category, setCategory] = useState();

  getProducts(category)
    .then(data => {
      setProductList(data);
    })

  const addedToCart = [];

  const addToCart = (product) => {
    if (!addedToCart.some(item => item.id === product.id)) {
      addedToCart.push(product);
      return;
    }
    addedToCart.forEach(item => {
      if (item.id === product.id) {
        item.qty = product.qty;
      }
    })
  };

  const handleCategory = (e, category) => {
    e.preventDefault();
    setCategory(category);
  }

  const categories = [
    { component: 'Surrealismo', title: 'Surrealismo', path: `/`, handleClick: (e) => handleCategory(e, 'Surrealismo') },
    { component: 'Impresionismo', title: 'Impresionismo', path: `/`, handleClick: (e) => handleCategory(e, 'Impresionismo') },
    { component: 'Expresionismo', title: 'Expresionismo', path: `/`, handleClick: (e) => handleCategory(e, 'Expresionismo') },
    { component: 'Cubismo', title: 'Cubismo', path: `/credits`, handleClick: (e) => handleCategory(e, 'Cubismo') },
  ];



  return (
    <Grid item container>
      <Header navLinks={categories} getHome={()=>{}}/>
      <CartWidget inCart={addedToCart} />
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8}>
        <Grid container spacing={2}>
          {
            !productList &&
            <p>Loading...</p>
          }
          {productList &&
            productList.map(item => {
              return (
                <Grid item xs={12} sm={4} key={item.id}>
                  <ItemList onAddToCart={addToCart} item={item} />
                </Grid>
              )
            })}
        </Grid>
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
}

export default Product;