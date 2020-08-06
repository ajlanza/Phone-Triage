import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import { Link } from 'react-router-dom';

export default class Answer extends Component {
  static contextType = TriageContext;
  state = {
    workedCount: 0,
  };
  
  // handleWorkedClick = e => {
  //   e.preventDefault();
  //   console.log('clicked');
  //   console.log(this.state.workedCount);
  //   const newCount = this.state.workedCount + 1;
  //   this.setState({
  //     workedCount: newCount,
  //   }, () => console.log('new count is ', this.state.workedCount))

  // }

  render() {
    const { solutions } = this.context;
    const url = window.location.pathname;
    const pathArray = url.split('/');
    // pull the solutionId from the url
    const solutionId = pathArray[4];
    // get the answer to our problem
    const answer = solutions.find(answer => answer.id === solutionId);
    const workedCount = answer.workedCount;
    
    
    return (
        
      <div>
        <p>{answer.solution}</p>
        {/* if this solution has been tagged as working, display that info       */}
        {workedCount ? <p>(This solution worked for {workedCount} users.)</p> : ''}
        {/* <button onClick={this.handleWorkedClick}>This worked!</button> */}

        <Link to='/service'>
          <input type='button' value='Request Service' />
        </Link>
      </div>
    )
  }
}