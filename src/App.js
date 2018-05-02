import React, { Component } from 'react';
import './App.css';

import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div>
              <nav className='App-Nav'>
                <Link to="/">Go to Home Page</Link>{' '}
                <Link to="/procedures">See Our Procedures</Link>{' '}
                <Link to="/contact">Contact Us!</Link>
              </nav>
            </div>
            <Route exact path="/" component={Home} />
            <Route path="/procedures" component={Procedures} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
