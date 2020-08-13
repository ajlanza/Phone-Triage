import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import ApiService from '../../services/api-service';
import { Link, Route } from 'react-router-dom';
import Solutions from '../Solutions/Solutions';
// import './AudioProblems.css';

export default class AudioProblems extends Component {
  static contextType = TriageContext;

  componentDidMount() {
    this.context.clearError()
    ApiService.getProblems()
      .then(this.context.setProblems)
      .catch(this.context.setError)
  }

  render() {
    const { problems } = this.context;
    //console.log ('AudioProblems.js context: ', this.context)

    // Get all the audio type problems
    const audioProblems = problems.filter(problem => (problem.problem_type) === 2) 
  
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
          <li>
            <Link to='/problem'><input type='button' value='Post a new problem' /></Link>  
          </li>            
        </ul>
      </div>
      )
  }
}