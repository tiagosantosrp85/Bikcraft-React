import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Produtos from "../pages/Produtos";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/sobre" component={Sobre} />
      <Route exact path="/Produtos" component={Produtos} />
    </Switch>
  </Router>
);

export default Routes;
