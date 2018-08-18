import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    counters: [
        { id: 1, value: 4 },
        { id: 2, value: 1 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
    ]
  }

  render() {
    return (
      
      <div>
        <h1> Counter </h1>
      </div>
    );
  }
}

export default App;
