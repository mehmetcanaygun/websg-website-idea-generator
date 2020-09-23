import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Generate from "./components/pages/Generate";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import "./css/style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/generate" component={Generate} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
