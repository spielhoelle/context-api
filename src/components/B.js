import React, { Component } from 'react'
import { MyContext } from '../context';

export default class B extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
        {
            (context) => {
              const { dispatch } = context;
              return (
                <div>
                <button onClick={() => dispatch({type: 'DECREMENT_Y'})}>decrementY by 1</button>
                </div>  
              )         
            }
        }
        </MyContext.Consumer>
      </div> 
    )
  }
}
