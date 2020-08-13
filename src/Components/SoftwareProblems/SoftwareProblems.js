import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import ApiService from '../../services/api-service'
import { Link, Route } from 'react-router-dom';
import Solutions from '../Solutions/Solutions';
// import './SoftwareProblems.css';

export default class SoftwareProblems extends Component {
  static contextType = TriageContext;

  componentDidMount() {
    this.context.clearError()
    ApiService.getProblems()
      .then(this.context.setProblems)
      .catch(this.context.setError)
  }

  render() {
    const { problems } = this.context;
    //console.log ('SoftwareProblems.js context: ', this.context)
 
    // Get all the software type problems
    const softwareProblems = problems.filter(problem => (problem.problem_type) === 4) 
  
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
        <li>
          <Link to='/problem'><input type='button' value='Post a new problem' /></Link>  
        </li>           
        </ul>
      </div>
      )
  }
}