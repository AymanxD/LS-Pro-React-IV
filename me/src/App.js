
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About.jsx';
import Hobbies from './Hobbies.jsx';
import Media from './Media.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/hobbies">Hobbies</Link></li>
            <li><Link to="/media">Media</Link></li>
          </ul>
          <Route path="/about" component={About}/>
          <Route path="/hobbies" component={Hobbies}/>
          <Route path="/media" component={Media}/>
        </div>
      </Router>
    );
  }
}

export default App;
