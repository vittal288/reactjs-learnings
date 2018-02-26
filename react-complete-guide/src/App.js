import React, { Component } from 'react';
// here React is complete class but Component is object or constant 

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I am react App</h1>
        <p>This is really working</p>
      </div>
    );

    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I am react App'));
  }
}

export default App;
