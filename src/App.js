import React from 'react';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import TechnicalDocuments from './components/TechnicalDocuments.js';
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
            renders the first one that matches the current URL. 
            
            TODO: Fix the routing issues on the actual git pages site ("/about" taking me to a 404 page when I refresh)
            */}
        
        <Switch>
          <Route path="/Avalanche-Website/technical-documents">
            <TechnicalDocuments />
          </Route>
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
