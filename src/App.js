import './App.css';
import Product from './containers/Product';
import About from './containers/About';
import Home from './containers/Home';
import { Route, Switch, Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import { Grid } from "@material-ui/core";
import Header from "./components/Header/Header";
import { useHistory } from "react-router-dom";
import ItemDetails from "./components/Item/ItemDetails";

function App() {

  const [section, setSection] = useState('home');
  const history = useHistory();
  const navLinks = [
    { component: Product, title: `obras`, path: `/obras`, handleClick: (e) => handleClick(e, 'obras') },
    { component: About, title: `about`, path: `/about`, handleClick: (e) => handleClick(e, 'about') }
  ];

  const handleClick = (e, selection) => {
    e.preventDefault();
    setSection(selection);
    history.push(`/${selection}`);
  }

  return (
    <>
      <Grid container direction="column" >
        <Grid item>
          <Header navLinks={navLinks} getHome={(e) => handleClick(e, 'home')} />
        </Grid>
        <Grid item>
          {section === 'home' ? Home : navLinks.find(item => item.title === section).component}
        </Grid>
      </Grid>
      <Switch>
        <Route exact path="/obras/category/:id" component={ItemDetails} />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/obras" component={Product} />
        <Route exact path="/about" component={About} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;