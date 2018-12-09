import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyProvider, MyContext } from './context';
import B from './components/B';

class App extends Component {
  render() {
    return (
      <MyProvider>      
        <MyContext.Consumer>
        {/* child of consumer is always a function */}
        {
            (context) => (
            <div>
              <button onClick={context.incrementX}>incrementX</button>
              <B />
            </div>
            )
        }
        </MyContext.Consumer>
      </MyProvider>
    );
  }
}

export default App;
