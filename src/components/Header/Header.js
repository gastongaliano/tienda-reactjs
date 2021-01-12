import React from "react";
import { Home } from "@material-ui/icons";
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  },
  appBar: {
    background: '#92c952'
  }
});

const Header = ({navLinks = [], headerIcon, extra}) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home" onClick={headerIcon}>
          <Home fontSize="large" />
        </IconButton>
        <List
          component="nav"
          aria-labelledby="main navigation"
          className={classes.navDisplayFlex}
        >
          {navLinks.map(({ title, path, handleClick }) => (
            <a href={path} key={title} className={classes.linkText} onClick={handleClick}>
              <ListItem button>
                <ListItemText primary={title} />
              </ListItem>
            </a>
          ))
          }
          {
            extra && 
            <a href={'/'} key={'TERMINAR COMPRA'} className={classes.linkText} onClick={headerIcon}>
              <ListItem button>
                <ListItemText primary={'TERMINAR COMPRA'} />
              </ListItem>
            </a>
          }

          
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
