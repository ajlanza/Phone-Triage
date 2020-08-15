import React, { Component } from 'react';
import TriageContext from '../TriageContext';
// Having problems with patch...
// import { Link } from 'react-router-dom';
// import TokenService from '../../services/token-service';
// import AuthApiService from '../../services/auth-api-service';

export default class Answer extends Component {
  static contextType = TriageContext;
  constructor(props){
    super(props)

    this.state = {
      answer: null,
      workedCount: 0,
      workedOnce: '',
    }
  }
  
  // Having problems with patch...
  // handleWorkedClick = e => {
  //    e.preventDefault();
  //    const newWorkedCount = this.state.workedCount + 1;
  //    const countObject = {worked_count: newWorkedCount}
  //    TokenService.hasAuthToken() 
  //    ? AuthApiService.updateWorkedCount(this.props.solutionId, countObject) 
  //    : console.log('no token');
  // //   console.log(this.state.workedCount);
  // //   const newCount = this.state.workedCount + 1;
  // //   this.setState({
  // //     workedCount: newCount,
  // //   }, () => console.log('new count is ', this.state.workedCount))

  //  }
  componentDidMount() {
    let workedOnce;
    const { solutions } = this.context;  
    
    // get the answer to our problem
    const answer = solutions.find(answer => answer.id === this.props.solutionId)
    let workedCount;
    if(answer){
      workedCount = answer.worked_count
      workedCount === 1 ? workedOnce ='user'  :  workedOnce = 'users'
    }
    if(answer) {
      this.setState({
        answer, workedCount, workedOnce
      })
  }
  }

  render() {   
    return (
      <div>
        <ul>
          <li>
            {this.state.answer ? <p>{this.state.answer.content} </p> : <p>Answer not found.</p>}
          </li>

          {/* Implement when patch service works */}
          {/* if this solution has been tagged as working, display that info       */}
          
          {/* <li>
            {this.state.workedCount ? <p>(This solution worked for {this.state.workedCount} {this.state.workedOnce}.)</p> : ''}
          </li> */}
        </ul> 

        {/* Having problems with patch... */}
        {/* <input type='button' onClick={this.handleWorkedClick} value='This worked!' />
        
        <Link to='/service'>
          <input type='button' value='Request Service' />
        </Link> */}
        
      </div>
    )
  }
}