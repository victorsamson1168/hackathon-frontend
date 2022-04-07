import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../screens/About";
import Home from "../screens/Home";
import ScoreForm from "../screens/ScoreForm";
import ThreeSixtyReview from "../screens/ThreeSixtyReview";
import HRaudit from "../screens/HRaudit";
import Login from "../screens/Login";
import Nominations from "../screens/Nominations";
import Eom from "../screens/Eom";
import Redeem from "../screens/Redeem";
import ResponsiveDrawer from "../screens/ResponsiveDrawer";
import ProtectedRoute from "./ProtectedRoute";
import RedeemRequest from "../screens/RedeemRequest";
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
          <ResponsiveDrawer title="nominations" showDrawer={true}>
            <Nominations />
          </ResponsiveDrawer>
        )}
      />
      <ProtectedRoute
        path="/eom"
        component={() => (
          <ResponsiveDrawer title="employee of the month" showDrawer={true}>
            <Eom />
          </ResponsiveDrawer>
        )}
      />
      <ProtectedRoute
        path="/scoreform"
        component={() => (
          <ResponsiveDrawer title="score form" showDrawer={true}>
            <ScoreForm />
          </ResponsiveDrawer>
        )}
      />
      <ProtectedRoute
        path="/three-sixty-review"
        component={() => (
          <ResponsiveDrawer title="360 review" showDrawer={true}>
            <ThreeSixtyReview />
          </ResponsiveDrawer>
        )}
      />
      <ProtectedRoute
        path="/HR"
        component={() => (
          <ResponsiveDrawer title="HR audit" showDrawer={true}>
            <HRaudit />
          </ResponsiveDrawer>
        )}
      />
      <ProtectedRoute
        path="/redeem"
        component={() => (
          <ResponsiveDrawer title="Redeem points" showDrawer={true}>
            <Redeem />
          </ResponsiveDrawer>
        )}
      />

<ProtectedRoute
        path="/redeemRequest"
        component={() => (
          <ResponsiveDrawer title="Redeem Requests" showDrawer={true}>
            <RedeemRequest />
          </ResponsiveDrawer>
        )}
      />
      
      <Route path="/login" component={() => <Login />} />
    </Switch>
  );
}

export default AppRoutes;
