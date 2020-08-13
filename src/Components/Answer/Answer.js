import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default class Answer extends Component {
  static contextType = TriageContext;
  state = {
    answer: {},
    workedCount: 0,
    workedOnce: '',
  };
  
   handleWorkedClick = e => {
     e.preventDefault();
     TokenService.hasAuthToken() ? console.log('clicked') : console.log('no token');
  //   console.log(this.state.workedCount);
  //   const newCount = this.state.workedCount + 1;
  //   this.setState({
  //     workedCount: newCount,
  //   }, () => console.log('new count is ', this.state.workedCount))

   }
  componentDidMount() {
    const { solutions } = this.context;  
    const url = window.location.pathname;
    const pathArray = url.split('/');
    // pull the solutionId from the url
    const solutionId = parseInt(pathArray[4]);
      // .then(this.context.setAuthorized)
      // .catch(this.context.setError)
    // get the answer to our problem
    // this works fine in practice but doesn't pass test
    
    const answer = solutions.find(answer => answer.id === solutionId)
    const workedCount = answer.worked_count
    workedCount === 1 ? this.setState({ workedOnce: 'user' }) : this.setState({ workedOnce: 'users' })
    // console.log('answer', answer)
    // console.log('solutionId', solutionId)
    // console.log('solutions', solutions)
    // console.log('solutions.find', solutions.find(answer => answer.id === solutionId))
    // console.log('solutions.find.id', solutions.find(answer => answer.id === solutionId).id)
    // console.log('answer.id', answer.id)
    // console.log('answer.workedCount', answer.workedCount)
    // console.log('workedCount', workedCount)
    this.setState({
      answer: answer,
      workedCount: workedCount
    })
  }

  render() {   
    return (
      <div>
        <p>{this.state.answer.content}</p>
        {/* if this solution has been tagged as working, display that info       */}
        {this.state.workedCount ? <p>(This solution worked for {this.state.workedCount} {this.state.workedOnce}.)</p> : ''}
        <input type='button' onClick={this.handleWorkedClick} value='This worked!' />
        <Link to='/service'>
          <input type='button' value='Request Service' />
        </Link>
      </div>
    )
  }
}