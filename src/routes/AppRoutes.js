import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../screens/About";
import Home from "../screens/Home";
import ScoreForm from "../screens/ScoreForm";
import Login from "../screens/Login";
import ResponsiveDrawer from "../screens/ResponsiveDrawer";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Switch>
      <ProtectedRoute
        path="/"
        exact
        component={() => (
          <ResponsiveDrawer title="home">
            <Home />
          </ResponsiveDrawer>
        )}
      />
      <ProtectedRoute
        path="/about"
        component={() => (
          <ResponsiveDrawer title="about">
            <About />
          </ResponsiveDrawer>
        )}
      />
      <Route
        path="/ScoreForm"
        render={() => (
          <ResponsiveDrawer title="ScoreForm">
            <ScoreForm />
          </ResponsiveDrawer>
        )}
      />
      <Route path="/login" component={() => <Login />} />
    </Switch>
  );
}

export default AppRoutes;
