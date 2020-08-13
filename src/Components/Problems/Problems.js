import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ScreenProblems from '../ScreenProblems/ScreenProblems';
import AudioProblems from '../AudioProblems/AudioProblems';
import BatteryProblems from '../BatteryProblems/BatteryProblems';
import SoftwareProblems from '../SoftwareProblems/SoftwareProblems';
import TriageContext from '../TriageContext';
import ApiService from '../../services/api-service';
import './problems.css';

export default class Problems extends Component {
  static contextType = TriageContext;
  
  componentDidMount() {
    this.context.clearError()
    ApiService.getProblemTypes()
      .then(this.context.setProblemTypes)
      .catch(this.context.setError)
  }
  
  render() {
    const { problemTypes=[] } = this.context
    // console.log('from problems.js', this.context)
    return(
      <div>
       
        <h3>What type of problem are you having?</h3>
        <h4><ul className="problemType">
          {/* Create a link for each type of problem we have */}
          {problemTypes.map(type => 
            <li key={type.id}>
              <Link to={`/${type.type}`}>{type.name}</Link>
            </li>)}
        </ul></h4>     
       
        <Route path='/screen' component={ ScreenProblems }  />
        <Route path='/audio' component={ AudioProblems } />
        <Route path='/battery' component={ BatteryProblems } />
        <Route path='/software' component={ SoftwareProblems } />
      </div>
    )
  }
}