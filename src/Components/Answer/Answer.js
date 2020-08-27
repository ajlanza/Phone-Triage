import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import './Answer.css';

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
          <li  className='answer'>
            {this.state.answer 
            ? <p>{this.state.answer.content}</p> 
            : <p>Answer not found.</p>}
          </li>        
        </ul>         
      </div>
    )
  }
}