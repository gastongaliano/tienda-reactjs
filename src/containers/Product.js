import { Grid } from "@material-ui/core";
import getProducts from '../services/productService';
import ItemList from "../components/Item/ItemList";
import CartWidget2 from '../components/CartWidget/CartWidget2';
import React, { useState } from 'react';
import Header from "../components/Header/Header";
import { useHistory } from "react-router-dom";

const Product = (props) => {
  const [productList, setProductList] = useState();
  const [category, setCategory] = useState();
  const history = useHistory();

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

  const renderCart = () => {
    const cartPath = '/obras/carrito'; 
    console.log('En renderCart!', history.location.pathname);
    if (history.location.pathname !== cartPath){
      console.log('location', history.location.pathname);
      history.push({
        pathname: cartPath,
        state: addedToCart
      });
    } else {
      history.push('/obras')
    }
    
  }

  return (
    <Grid item container>
      <Header 
        navLinks={categories} 
        getHome={()=>{}} 
        extra={<CartWidget2 renderCart={renderCart}/>}
      />
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8}>
        <Grid container spacing={2}>
          {
            !productList &&
            <p>Loading...</p>
          }
          {
            props.children
          }
          { !props.children &&
            productList &&
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