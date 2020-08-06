import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import { Link, Route } from 'react-router-dom';
import Solutions from '../Solutions/Solutions';
// import './AudioProblems.css';

export default class AudioProblems extends Component {
  static contextType = TriageContext;

  render() {
    const { problems } = this.context;
 
    // Get all the audio type problems
    const audioProblems = problems.filter(problem => (problem.problemClass) === 'Audio') 
  
    return(
      <div>
        <h2>Audio Problems</h2>
        <ul className="problems">
            {audioProblems.map(problem => 
              <li key={problem.id}>
                <Link to={`/audio/solutions/${problem.id}`} key={problem.id}>{problem.title}</Link>
                <Route path={`/audio/solutions/${problem.id}`} component={ Solutions } />
              </li>
            )}            
        </ul>
      </div>
      )
  }
}