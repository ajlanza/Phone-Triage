import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import { Link, Route } from 'react-router-dom';
import Solutions from '../Solutions/Solutions';
// import './ScreenProblems.css';

export default class ScreenProblems extends Component {
  static contextType = TriageContext;

  render() {
    const { problems } = this.context;
 
    // Get all the screen type problems
    const screenProblems = problems.filter(problem => (problem.problemClass) === 'Screen') 
  
    return(
      <div>
        <h2>Screen Problems</h2>
        <ul className="problems">
            {screenProblems.map(problem => 
              <li key={problem.id}>
                <Link to={`/screen/solutions/${problem.id}`}>{problem.title}</Link>
                <Route path={`/screen/solutions/${problem.id}`} component={ Solutions } />
              </li>
            )}            
        </ul>
      </div>
      )
  }
}