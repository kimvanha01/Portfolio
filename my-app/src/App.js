import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import TopNav from './components/topNav';
import Portfolio from './portfolios/portfolio';
import Home from './components/home';
import About from './components/about';

function App() {
  return (
    <Router>
    <div className="App">
    <TopNav />
      <Switch>
      <Route path="/portfolio" component={Portfolio}>
        <Portfolio />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
          <Home />
      </Route>
    </Switch>
    </div>
    </Router>
  );
}



function Contact() {
  return <h2>Contact</h2>;
}

export default App;
