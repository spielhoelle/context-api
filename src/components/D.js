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
                <p>x = {context.x}</p>
                <p>y = {context.y}</p>
                </div>
                )
            }
            </MyContext.Consumer>
        </div> 
    )
  }
}
