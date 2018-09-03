import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Border from './components/border';
import {$,jQuery} from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/popper.js/dist/popper.js';
class App extends Component {
    render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            </p>
	    <Border />
      </div>
    );
  }
}

export default App;
