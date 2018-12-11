import React, { Component } from 'react'
import { MyContext } from '../context';

export default class B extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
        {/* child of consumer is always a function */}
        {
            (context) => (
            <div>
            <button onClick={context.decrementY}>decrementY by 1</button>
            </div>
            )
        }
        </MyContext.Consumer>
      </div> 
    )
  }
}
