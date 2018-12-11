import React, { Component } from 'react'

// 1st, make a new context
export const MyContext = React.createContext();

// 2nd, create a provider component
export class MyProvider extends Component {

  state = {
    x: 0,
    y: 0
  };
  
  decrementY = () => {
    this.setState({
      y: this.state.y - 1
    })
  }

  // we return a context provider
  render() {
    return (
      // <MyContext.Provider value="I am the value">
      <MyContext.Provider value={{
        state: this.state,
        incrementX: () => {
          this.setState({
            x: this.state.x + 1
          })
        },
        decrementY: this.decrementY
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}