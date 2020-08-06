import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import { Link, Route } from 'react-router-dom';
import Solutions from '../Solutions/Solutions';
// import './BatteryProblems.css';

export default class BatteryProblems extends Component {
  static contextType = TriageContext;

  render() {
    const { problems } = this.context;
 
    // Get all the battery type problems
    const batteryProblems = problems.filter(problem => (problem.problemClass) === 'Battery') 
  
    return(
      <div>
        <h2>Battery Problems</h2>
        <ul className="problems">
            {batteryProblems.map(problem => 
              <li key={problem.id}>
                <Link to={`/battery/solutions/${problem.id}`} key={problem.id}>{problem.title}</Link>
                <Route path={`/battery/solutions/${problem.id}`} component={ Solutions } />
              </li>
            )}            
        </ul>
      </div>
      )
  }
}