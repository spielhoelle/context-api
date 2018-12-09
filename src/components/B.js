import React, { Component } from 'react'
import C from './C';

export default class B extends Component {
  render() {
    return (
      <div>
        <h2>B</h2>
        <C />
      </div> 
    )
  }
}
