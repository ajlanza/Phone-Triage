import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import ApiService from '../../services/api-service';
import { Link, Route } from 'react-router-dom';
import Answer from '../Answer/Answer';
//import './Solutions.css';

export default class Solutions extends Component {
  static contextType = TriageContext;
  
  componentDidMount() {
    this.context.clearError()
    ApiService.getSolutions()
      .then(this.context.setSolutions)
      .catch(this.context.setError)
  }

  render() {
    const { solutions } = this.context;
    const url = window.location.pathname;
    const pathArray = url.split('/');
    const problemType = pathArray[1]
    // change the url string id to an integer so we can match it to our database value
    const problemId = parseInt(pathArray[3]);
        
    const solutionsToProblem = solutions.filter(solution => solution.problem_id === problemId);
    
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