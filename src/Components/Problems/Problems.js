import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import ApiService from '../../services/api-service';
import { Link } from 'react-router-dom';
import Solutions from '../Solutions/Solutions';
import './Problems.css';

export default class Problems extends Component {
  static contextType = TriageContext;
  
  state = {
    problems: [],
    currentProblemType: '',
    currentProblemId: ''
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
      currentProblemId: problemId
    })
  }

  render() {
   
    return(
      <div className='problems'>
        <h2> {this.props.problemName} Problems</h2>
        <ul className="problems">
            {this.state.problems.length > 0 ? this.state.problems.map(problem => 
              <li key={problem.id} onClick={(event) => {
                this.handleClick(event, problem.problem_type, problem.id)
              }}>
                {problem.title}
                <div hidden={!(this.state.currentProblemId === problem.id)}>
                  <Solutions problemType={problem.problem_type} problemId={problem.id}/>
                </div>
                {/* <Route path={`/screen/solutions`} component={ Solutions } />
                <Link to={`/screen/solutions?problemType=${problem.problem_type}&problemId=${problem.id}`}>{problem.title}</Link> */}
              </li>
            )
            : <li>No {this.props.type} problems</li>
            }
            <li>
              <Link to='/problem'><input type='button' value='Post a new problem' /></Link>  
            </li>            
        </ul>
      </div>
      )
  }
}