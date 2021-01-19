import './App.css';
import Product from './containers/Product';
import About from './containers/About';
import Home from './containers/Home';
import Header from "./components/Header/Header";
import ItemDetails from "./components/Item/ItemDetails";
import CartList from './components/CartWidget/CartList';
import { updateCart, categories, removeFromCart} from "./business/product";
import { Route, Switch, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export const CartContext = React.createContext([]);
export const ProductContext = React.createContext([]);

function App() {

  const history = useHistory();
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  
  const navLinks = [
    { component: Product, title: `obras`, path: `/obras`, handleClick: (e) => handleClick(e, 'obras') },
    { component: About, title: `about`, path: `/about`, handleClick: (e) => handleClick(e, 'about') }
  ];

  useEffect(() => {
    setCartLength(cart.length);
  }, [cart]);

  const handleClick = (e, menuOption) => {
    e.preventDefault();
    history.push(`/${menuOption}`);
  }

  
  const renderCart = (e) => {
    e && e.preventDefault();
    const cartPath = '/obras/cart';
    console.log("donde estamos", history.location.pathname);
    if (history.location.pathname !== cartPath){
      history.push({
        pathname: cartPath
      });
    } else {
      history.push('/obras')
    }
  }


  const onAddToCart = (item) => {
    setCart(updateCart(item, cart));
  };

  const onSustractFromCart = (item) => {
    setCart(updateCart(item, cart))
  };

  const onRemoveFromCart = (id) => {
    setCart(removeFromCart(id, cart));
  };
  

  return (
    <>
      <Grid container direction="column" >
        <Grid item>
          <Header navLinks={navLinks} headerIcon={(e) => handleClick(e, 'home')} />
        </Grid>
      </Grid>
      <Switch>
        <Route 
          exact path="/obras/category/:category/item/:id" 
          render={ props => {
            return (
            <ProductContext.Provider value={{onAddToCart, onSustractFromCart, onRemoveFromCart, renderCart}}>
              <Product cartLength={cartLength} categories = {["1","2","3"]} extra= {true} renderCart= {renderCart}>
                <ItemDetails match= {props.match}/>
              </Product>
            </ProductContext.Provider>
            )
          }}
        />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/obras" 
          render={ props => {
            return (
              <ProductContext.Provider value={{onAddToCart, renderCart, onSustractFromCart, onRemoveFromCart}}>
                <Product cartLength={cartLength} categories={categories} renderCart={renderCart} productList={productList} setProductList={setProductList}/>
              </ProductContext.Provider>
            )
          }}
        />
        <Route 
          exact path="/obras/cart" 
          render={ props => {
              return (
                <CartContext.Provider value={{ cart: { cart, onRemoveFromCart }}}>
                  <Product cartLength={cartLength}>
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