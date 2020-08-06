import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ScreenProblems from '../ScreenProblems/ScreenProblems';
import AudioProblems from '../AudioProblems/AudioProblems';
import BatteryProblems from '../BatteryProblems/BatteryProblems';
import SoftwareProblems from '../SoftwareProblems/SoftwareProblems';
import TriageContext from '../TriageContext';
import './problems.css';

export default class Problems extends Component {
  static contextType = TriageContext;
  
  render() {
    const { problemType=[] } = this.context
    return(
      <div>
       
        <h2>What type of problem are you having?</h2>
        <h3><ul className="problemType">
          {/* Create a link for each type of problem we have */}
          {problemType.map(type => 
            <li key={type.id}>
              <Link to={`/${type.type}`}>{type.name}</Link>
            </li>)}
        </ul></h3>     
       
        <Route path='/screen' component={ ScreenProblems }  />
        <Route path='/audio' component={ AudioProblems } />
        <Route path='/battery' component={ BatteryProblems } />
        <Route path='/software' component={ SoftwareProblems } />
      </div>
    )
  }
}