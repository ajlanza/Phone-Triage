import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import TriageContext from '../TriageContext';
import ApiService from '../../services/api-service';
import Problems from '../Problems/Problems';
import './problemsNav.css';
import loading from '../../img/load.gif';  

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
        <h2>Click the type of problem you are having.</h2>
        {/* If context has problem types render page, otherwise render loading */}
        {this.context.problemTypes && this.context.problemTypes.length > 0 
        ?<div>
        <h3><ul className="problemType">
          {/* Create a link for each type of problem we have */}
          {problemTypes.map(type => 
            <li key={type.id}>
              <Link to={`/${type.type}`} className='problemLink'>{type.name}</Link>
            </li>)}
        </ul></h3>     
        {/* Create a route for each problem type */}
        {problemTypes.map(type =>   
          <Route key={type.id} path={`/${type.type}`} render={(props) => <Problems {...props} typeOfProblem={type.type} problemName={type.name} problemTypeId={type.id}/>} />
        )}
        </div>
        : <div className='loading'>
            <h3>loading</h3>
            <img src={loading} alt='loading'/>
          </div>
        }
      </div>
    )
  }
}