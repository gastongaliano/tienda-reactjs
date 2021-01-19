import { Grid, Button } from "@material-ui/core";
import ItemList from "../components/Item/ItemList";
import CartWidget2 from '../components/CartWidget/CartWidget2';
import React, { useEffect } from 'react';
import Header from "../components/Header/Header";
import { getItems, getItemsByCategory } from '../services/productService';
// import { getFirestore } from "../services/firebase";

const Product = ({cartLength, categories, renderCart, productList, setProductList, children}) => {
  
  // useEffect( () => {
  //   if (!children) {
  //     getProducts()
  //     .then(data => {
  //       setProductList(data);
  //     })
  //   }
  // }, [children, setProductList])
  
  // useEffect( () => {
  //   if (!children) {
  //     const itemCollection = getFirestore().collection("obras"); 
  //     itemCollection.get()
  //       .then(data => {
  //       setProductList(data.docs.map(doc => doc.data()))
  //       })
  //       .catch(error => console.log(error))
  //   }
  // }, [])
  
  useEffect( () => {
    if (!children) {
      getItems(setProductList)
    }
  }, [])

  return (
    <>
      <Button onClick={() => getItemsByCategory((list) => setProductList(list), 0)}>Category!</Button>
      <Grid item container>
        <Header 
          navLinks={categories} 
          headerIcon={renderCart} 
          extra={<CartWidget2 renderCart={renderCart}/>}
          cartLength= {cartLength}
        />
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            {
              !children && !productList &&
              <p>Loading...</p>
            }
            {
              children
            }
            { !children &&
              productList &&
              productList.map(item => {
                return (
                  <Grid item xs={12} sm={4} key={item.id}>
                    <ItemList item={item} />
                  </Grid>
                )
              })}
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </>
  );
}

export default Product;