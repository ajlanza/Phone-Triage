import React, { Component } from 'react';
import ProblemsNav from '../ProblemsNav/ProblemsNav';
import './Homepage.css'

export default class Homepage extends Component {

  render() {
    return (
      <div className="content">
        <p>You can request a qualified technician meet at your location to fix your phone at any time. You can also browse problems previous users have posted to see if there may be a solution that works for you. 
          If you don't see your problem listed already, feel free to post it and we'll try and find a solution.</p>
        <ProblemsNav />
      </div>
    )
  }
}
