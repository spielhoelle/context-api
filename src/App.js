import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyProvider } from './context';
import A from './components/A';
import C from './components/C';

class App extends Component {
  render() {
    return (
      <MyProvider>      
      <div className="App">
        <h1>Context API</h1>
        <A />
        <C />
      </div>
      </MyProvider>
    );
  }
}

export default App;
