import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import ApiService from '../../services/api-service';
import { Link, Route } from 'react-router-dom';
import Solutions from '../Solutions/Solutions';
import './ScreenProblems.css';

export default class ScreenProblems extends Component {
  static contextType = TriageContext;
  
  componentDidMount() {
    this.context.clearError()
    ApiService.getProblems()
      .then(this.context.setProblems)
      .catch(this.context.setError)
  }

  render() {
    const { problems } = this.context; 
    // Get all the screen type problems
    const screenProblems = problems.filter(problem => (problem.problem_type) === 1) 
  
    return(
      <div className='problems'>
        <h2>Screen Problems</h2>
        <ul className="problems">
            {screenProblems.map(problem => 
              <li key={problem.id}>
                <Link to={`/screen/solutions/${problem.id}`}>{problem.title}</Link>
                <Route path={`/screen/solutions/${problem.id}`} component={ Solutions } />
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