import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent'

class App extends Component {
  render() {

    return (
        <MyComponent name="React" age={11} />
    );
  }
}

export default App;
