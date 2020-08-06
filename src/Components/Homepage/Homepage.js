import React, { Component } from 'react';
import Problems from '../Problems/Problems';
// import Solutions from './Solutions';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <p>Let's start by diagnosing your problem. From there we'll check and see if we have a possible solution. If we can't come up with a solution, you can request a technician meet with you to repair your phone.</p>
        <Problems />
        {/* <Solutions /> */}
      </div>
    )
  }
}
