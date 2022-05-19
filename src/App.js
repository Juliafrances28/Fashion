import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar/index.js";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/styles" component={Home} />
          <Route exact path="/product" component={product} />
          <Route exact path="/landing" component={landing} />
          <Route exact path="/Bag" component={Bag} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
