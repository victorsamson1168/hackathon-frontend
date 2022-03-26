import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../screens/About";
import Home from "../screens/Home";
import ResponsiveDrawer from "../screens/ResponsiveDrawer";

function AppRoutes() {
  return (
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <ResponsiveDrawer title="home">
            <Home />
          </ResponsiveDrawer>
        )}
      />
      <Route
        path="/about"
        render={() => (
          <ResponsiveDrawer title="about">
            <About />
          </ResponsiveDrawer>
        )}
      />
    </Switch>
  );
}

export default AppRoutes;
