import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import { Link, Route } from 'react-router-dom';
import Solutions from '../Solutions/Solutions';
// import './SoftwareProblems.css';

export default class SoftwareProblems extends Component {
  static contextType = TriageContext;

  render() {
    const { problems } = this.context;
 
    // Get all the software type problems
    const softwareProblems = problems.filter(problem => (problem.problemClass) === 'Software') 
  
    return(
      <div>
        <h2>Software Problems</h2>
        <ul className="problems">
            {softwareProblems.map(problem => 
              <li key={problem.id}>
                <Link to={`/software/solutions/${problem.id}`}>{problem.title}</Link>
                <Route path={`/software/solutions/${problem.id}`} component={ Solutions } />
              </li>
            )}            
        </ul>
      </div>
      )
  }
}