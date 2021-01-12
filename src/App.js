import './App.css';
import Product from './containers/Product';
import About from './containers/About';
import Home from './containers/Home';
import Header from "./components/Header/Header";
import ItemDetails from "./components/Item/ItemDetails";
import CartList from './components/CartWidget/CartList';
import { cartList, addToCart, categories, removeFromCart} from "./business/product";
import { Route, Switch, Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const CartContext = React.createContext([]);
export const ProductContext = React.createContext([]);

function App() {

  const history = useHistory();
  const navLinks = [
    { component: Product, title: `obras`, path: `/obras`, handleClick: (e) => handleClick(e, 'obras') },
    { component: About, title: `about`, path: `/about`, handleClick: (e) => handleClick(e, 'about') }
  ];

  const handleClick = (e, menuOption) => {
    e.preventDefault();
    history.push(`/${menuOption}`);
  }

  const [productList, setProductList] = useState([]);
  
  const renderCart = (e) => {
    e.preventDefault();
    const cartPath = '/obras/cart'; 
    if (history.location.pathname !== cartPath){
      console.log('location', history.location.pathname);
      history.push({
        pathname: cartPath
      });
    } else {
      history.push('/obras')
    }
  }

  
  

  return (
    <>
      <Grid container direction="column" >
        <Grid item>
          <Header navLinks={navLinks} headerIcon={(e) => handleClick(e, 'home')} />
        </Grid>
      </Grid>
      <Switch>
        <Route exact path="/obras/:category/:id" component={ItemDetails} />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/obras" 
          render={ props => {
            return (
              <ProductContext.Provider value={{onAddToCart: addToCart}}>
                <Product categories={categories} renderCart={renderCart} productList={productList} setProductList={setProductList}/>
              </ProductContext.Provider>
            )
          }}
        />
        <Route 
          exact path="/obras/cart" 
          render={ props => {
              return (
                <CartContext.Provider 
                  value={{cart: { cartList, removeFromCart }}}
                >
                  <Product>
                    <CartList/>
                  </Product>
                </CartContext.Provider>
              )
          }} 
        />
        <Route exact path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;