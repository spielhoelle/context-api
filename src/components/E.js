import React, { Component } from 'react'
import { MyContext } from '../context';

export default class E extends Component {
  render() {
    return (
        <div>
            <MyContext.Consumer>
            {
                (context) => {
                    console.log('context', context);
                    
                const { dispatch } = context;
                return (
                    <div>
                    <button onClick={() => dispatch({type: 'INCREMENT_X'})}>incrementX by 1</button>
                    </div>  
                )         
            }
            }       
            </MyContext.Consumer>
        </div> 
    )
  }
}
