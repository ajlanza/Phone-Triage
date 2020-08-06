import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import { Link, Route } from 'react-router-dom';
import Answer from '../Answer/Answer';
//import './Solutions.css';

export default class Solutions extends Component {
  static contextType = TriageContext;
  
 

  render() {
    // const { solutions } = this.context;
    // const { problemId }  = this.props.match.params;
    const { solutions } = this.context;
    const url = window.location.pathname;
    const pathArray = url.split('/');
    const problemType = pathArray[1]
    const problemId = pathArray[3];
    // const solutionId = pathArray[4];
    const solutionsToProblem = solutions.filter(solution => solution.problemId === problemId)
    console.log('solutions component', problemId);
    
    return (
      <div>
        <ul className='solutions'>
          {solutionsToProblem.map(solution => 
            <li key={solution.id}>
              <Link to={`/${problemType}/solutions/${problemId}/${solution.id}`}>{solution.title}</Link>
              <Route path={`/${problemType}/solutions/${problemId}/${solution.id}`} component={ Answer } />
              {/* <Route path={`${url}/${solution.id}`} component={ Answer } /> */}
            </li>
          )}
        </ul>
      </div>
    )
  }
}