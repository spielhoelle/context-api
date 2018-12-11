import React, { Component } from 'react'

// 1st, make a new context
export const MyContext = React.createContext();

const reducer = (state, action) => {
  console.log('Hello from Reducer', state, action);
  
  switch(action.type) {
      case 'INCREMENT_X': 
          return {
              ...state,
              x: state.x + 1
          };
      case 'DECREMENT_Y':
      return {
              ...state,
              y: state.y - 1
      };
      default:
          return state;
  }
}

// 2nd, create a provider component
export class MyProvider extends Component {

  state = {
    x: 0,
    y: 0,
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  };

  // we return a context provider
  render() {
    return (
      // <MyContext.Provider value="I am the value">
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}