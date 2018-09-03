import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro/Intro';
import Series from './components/Series/Series';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all of the series!"/>
        <Series/>
      </div>
    );
  }
}

export default App;
