import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

import Home from "./Home";
import Services from "./Services";

const Main = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

const appDiv = document.getElementById("app");
render(<Main />, appDiv);

export default Main;
