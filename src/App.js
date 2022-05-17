import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Fashion from "./pages/Fashion";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Fashion} />
        <Route exact path="/styles" component={Fashion} />
      </div>
    </Router>
  );
}

export default App;
