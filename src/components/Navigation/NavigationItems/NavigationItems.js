import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/auth">Logout</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Authenticate</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
