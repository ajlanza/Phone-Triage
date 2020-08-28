import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import ApiService from '../../services/api-service';
import { Link } from 'react-router-dom';
import Solutions from '../Solutions/Solutions';
import './problems.css';
import loading from '../../img/load.gif';  

export default class Problems extends Component {
  static contextType = TriageContext;
  
  state = {
    problems: [],
    currentProblemType: '',
    currentProblemId: '',
    hide: true
  }

   componentDidMount() {
     let problems;
     this.context.clearError()
     ApiService.getProblems()
       .then((data) => {
         this.context.setProblems(data)
         problems = data.filter(problem => (problem.problem_type) === this.props.problemTypeId)
         if(problems && problems.length > 0){
           this.setState({
             problems
           })
         }
       })      
       .catch(this.context.setError)
   }

  handleClick = (event, problemType, problemId) => {
    event.preventDefault()
    this.setState({
      currentProblemType: problemType,
      currentProblemId: problemId,
      hide: !this.state.hide
    })
  }

  render() {
   
    return(
      <div className='problemTitle'>
        <h3> {this.props.problemName} Problems</h3>
        <ul>
          {this.state.problems.length > 0 
            ? this.state.problems.map(problem => 
              <li key={problem.id} onClick={(event) => {
                this.handleClick(event, problem.problem_type, problem.id)
              }}>
                <span className='problems'>{problem.title}</span>
                <div hidden={!(this.state.currentProblemId === problem.id)}>
                  <Solutions problemType={problem.problem_type} problemId={problem.id}/>
                </div>
              </li>
            )
            : <div className='loading'>
                <h3>loading</h3>
                <img src={loading} alt='loading'/>
              </div>
            }
            <li>
              <Link to='/problem'>
                <input type='button' value='Post a problem not listed' />
              </Link>  
              <Link to='/service'>
                <input type='button' value='Request service' />
              </Link>  
            </li>        
        </ul>
      </div>
      )
  }
}