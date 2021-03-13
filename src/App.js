import React from 'react';
import Home from './Home.js';
import Navbar from './Navbar.js';
import About from './About.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App(){
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Avalanche-Website/about">
            <About />
          </Route>
          <Route path="/Avalanche-Website/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
