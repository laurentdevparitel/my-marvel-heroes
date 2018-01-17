import React, { Component } from 'react';
import logo from './img/Marvel-logo.png';
import './App.css';

import Gallery from './Gallery.js';

/*
  TODO :

  - add ReactBoostrap
  https://react-bootstrap.github.io/getting-started/introduction/

 - add Redux store ..
*/

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Marvel logo" />
          <h1 className="App-title">Marvel super heroes</h1>
        </header>
        <Gallery />
      </div>
    );
  }
}

export default App;
