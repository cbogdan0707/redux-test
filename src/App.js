import React, { Component } from "react";
import { Route } from "react-router-dom";
import About from "./About.js";
import Home from "./Home.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
        </main>
      </div>
    );
  }
}

export default App;
