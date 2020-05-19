import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddGuest from "../components/AddGuest";
import { Login } from "../components/Login";
import ListGuests from "../components/ListGuests";
import { Redirect } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login/" />} />
        <Route exact path="/login/" component={Login} />
        <PrivateRoute exact path="/guests/" component={ListGuests} />
        <PrivateRoute exact path="/guests/add/" component={AddGuest} />
      </Switch>
    </Router>
  );
}
