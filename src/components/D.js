import React, { Component } from 'react'
import { MyContext } from '../context';

export default class D extends Component {
  render() {
    return (
        <div>
            <MyContext.Consumer>
            {/* child of consumer is always a function */}
            {
                (context) => (
                <div>
                <p>x = {context.state.x}</p>
                <p>y = {context.state.y}</p>
                </div>
                )
            }
            </MyContext.Consumer>
        </div> 
    )
  }
}
