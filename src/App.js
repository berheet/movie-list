import React, { Component } from 'react';
import Routes from './routes'
import {Link} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div><h1 className="App-title">TV Series List</h1> <Link to='/' exact path><p style={{color:'white'}}>[Home]</p></Link></div>
        </header>
        <Routes/>
      </div>
    );
  }
}

export default App;
