import React, { Component } from 'react'
import { MyContext } from '../context';

export default class C extends Component {
  render() {
    return (
      <MyContext.Consumer>
      {/* child of consumer is always a function */}
      {
          (context) => (
          <div>
            <p>x = {context.state.x}</p>
          </div>
          )
      }
      </MyContext.Consumer>
    )
  }
}
