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

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home" onClick={props.getHome}>
          <Home fontSize="large" />
        </IconButton>
        <List
          component="nav"
          aria-labelledby="main navigation"
          className={classes.navDisplayFlex}
        >
          {props.navLinks.map(({ title, path, handleClick }) => (
            <a href={path} key={title} className={classes.linkText} onClick={handleClick}>
              <ListItem button>
                <ListItemText primary={title} />
              </ListItem>
            </a>
          ))}
          <ListItem button>
              <ListItemText primary={props.extra} />
              <span class="MuiTouchRipple-root"></span>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
