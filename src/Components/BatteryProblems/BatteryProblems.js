import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import ApiService from '../../services/api-service';
import { Link, Route } from 'react-router-dom';
import Solutions from '../Solutions/Solutions';
// import './BatteryProblems.css';

export default class BatteryProblems extends Component {
  static contextType = TriageContext;

  componentDidMount() {
    this.context.clearError()
    ApiService.getProblems()
      .then(this.context.setProblems)
      .catch(this.context.setError)
  }

  render() {
    const { problems } = this.context;
    //console.log ('BatteryProblems.js context: ', this.context)
 
    // Get all the battery type problems
    const batteryProblems = problems.filter(problem => (problem.problem_type) === 3) 
  
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
          <li>
            <Link to='/problem'><input type='button' value='Post a new problem' /></Link>  
          </li>
        </ul>
      </div>
      )
  }
}