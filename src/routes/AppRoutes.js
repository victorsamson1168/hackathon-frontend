import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../screens/About";
import Home from "../screens/Home";
import ScoreForm from "../screens/ScoreForm";
import Login from "../screens/Login";
import Nominations from "../screens/Nominations";
import Eom from "../screens/Eom";
import ResponsiveDrawer from "../screens/ResponsiveDrawer";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Switch>
      <ProtectedRoute
        path="/"
        exact
        component={() => (
          <ResponsiveDrawer title="home" showDrawer={true}>
            <Home />
          </ResponsiveDrawer>
        )}
      />
      <ProtectedRoute
        path="/about"
        component={() => (
          <ResponsiveDrawer title="about" showDrawer={true}>
            <About />
          </ResponsiveDrawer>
        )}
      />
      <ProtectedRoute
        path="/nominations"
        component={() => (
          <ResponsiveDrawer title="nominations" showDrawer={false}>
            <Nominations />
          </ResponsiveDrawer>
        )}
      />
      <ProtectedRoute
        path="/eom"
        component={() => (
          <ResponsiveDrawer title="employee of the month" showDrawer={false}>
            <Eom />
          </ResponsiveDrawer>
        )}
      />
      <ProtectedRoute
        path="/scoreform"
        component={() => (
          <ResponsiveDrawer title="score form"  showDrawer={true}>
            <ScoreForm />
          </ResponsiveDrawer>
        )}
      />
      <Route path="/login" component={() => <Login />} />
    </Switch>
  );
}

export default AppRoutes;
