import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import TriageContext from '../TriageContext';
import ApiService from '../../services/api-service';
import Problems from '../Problems/Problems';
import './problemsNav.css';

export default class ProblemsNav extends Component {
  static contextType = TriageContext;
  state = {
    problemTypes: []
  }
  
  componentDidMount() {
    this.context.clearError()
    ApiService.getProblemTypes()
      .then((data) => {
        this.context.setProblemTypes(data)
      })
      .catch(this.context.setError)
  }
  
  render() {
    const { problemTypes=[] } = this.context
    return(
      <div>
        <h3>What type of problem are you having?</h3>
        {/* If context has problem types render page, otherwise render loading */}
        {this.context.problemTypes && this.context.problemTypes.length > 0 
        ?<div>
        <h4><ul className="problemType">
          {/* Create a link for each type of problem we have */}
          {problemTypes.map(type => 
            <li key={type.id}>
              <Link to={`/${type.type}`}>{type.name}</Link>
            </li>)}
        </ul></h4>     
        {/* Create a route for each problem type */}
        {problemTypes.map(type =>   
          <Route key={type.id} path={`/${type.type}`} render={(props) => <Problems {...props} typeOfProblem={type.type} problemName={type.name} problemTypeId={type.id}/>} />
        )}
        </div>
        : <h4>loading</h4>  
      }
      </div>
    )
  }
}