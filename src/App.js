import React, { Component } from 'react';
import RandomDOM from './lib/random-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Random UI</h1>
        </header>
        <p>Follow the instructions in each step below.</p>
        <RandomDOM />
      </div>
    );
  }
}

export default App;
