import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Welcome from "./Welcome";
import NewUser from "./Hostel";
import Login from "./login";
import ChooseHostel from "./ChooseHostel";
import ChooseRoom from "./ChooseRoom";
import ChooseGirlsHostel from "./ChooseGirlsHostel";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/newuser" component={NewUser} />
          <Route exact path="/boyshostel" component={ChooseHostel} />
          <Route exact path="/girlshostel" component={ChooseGirlsHostel} />
          <Route exact path="/rooms" component={ChooseRoom} />
        </Switch>
      </Router>
    );
  }
}
