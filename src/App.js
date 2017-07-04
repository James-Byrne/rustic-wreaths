import React, { Component } from 'react';
import './App.css';

import Home from './views/Home.js'
import Navbar from './components/Navbar.js'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
      </div>
    );
  }
}

export default App;
