import React, { Component } from 'react';
import './App.css';
import symbol from './dentistsymbol.png';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Your Local Dentist</h1>
          <img src={symbol}></img>
        </header>
        <p className="App-intro">
          Welcome to your local dentist's website.
        </p>
      </div>
    );
  }
}

export default Home;
