import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css'
import './App.css';

import Navbar from './components/Navbar.js'
import Home from './views/Home.js'
import About from './views/About.js';
import Contact from './views/Contact.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/about" component={About}/>
          <Route exact={true} path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
