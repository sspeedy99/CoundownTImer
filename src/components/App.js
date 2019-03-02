import React, { Component } from 'react';
import Countdown from './Countdown';

class App extends Component { //Component is an internal class in react
  render() {
    return (
      <div className="App">
        <Countdown/>
      </div>
    );
  }
}

export default App; //export the App componet to index.js
