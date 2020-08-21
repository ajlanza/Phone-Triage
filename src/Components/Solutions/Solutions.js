import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import ApiService from '../../services/api-service';
import Answer from '../Answer/Answer';
import { Link } from 'react-router-dom';
import './Solutions.css';

export default class Solutions extends Component {
  static contextType = TriageContext;
  constructor(props){
    super(props)
  
    this.state = {
      solutionsToProblem: [],
      currentProblemId: '',
      currentSolutionId: '',
      hidePostAnswerForm: true
    }
  }

  componentDidMount() {
    let solutionsToProblem;
    this.context.clearError()
    ApiService.getSolutions()
      .then((data) => {
        this.context.setSolutions(data)
        solutionsToProblem = data.filter(solution => solution.problem_id === this.props.problemId);
        if(solutionsToProblem && solutionsToProblem.length > 0){
          this.setState({
            solutionsToProblem
          })
        }
      })
      .catch(this.context.setError)
  }

  handleSolutionTitleClick = (event, problemId, solutionId) => {
    event.preventDefault()
    this.setState({
      currentProblemId: problemId,
      currentSolutionId: solutionId
    })
  }

  handlePostAnswerClick = (event => {
    event.preventDefault()
    this.setState({
      hidePostAnswerForm: !this.state.hidePostAnswerForm
    })
  })
  render() {
    const { solutionsToProblem } = this.state;
    const { problemId } = this.props
    return (
      <div>
        <ul className='solutions'>
          {solutionsToProblem.map(solution => 
          <li key={solution.id} onClick={(event) => {
            this.handleSolutionTitleClick(event, problemId, solution.id)
          }}>
            {solution.title}
            <div hidden={!(this.state.currentSolutionId === solution.id)}>
              <Answer problemId={problemId} solutionId={solution.id} />
            </div>
          </li>
          )}
          <li>
            <Link to={{
              pathname: `/answer`,
              state: {problemId: problemId, problemType: this.props.problemType}
            }}>
            <input type='button' value='Post an answer' />
            </Link>
          </li> 
        </ul>
      </div>
    )
  }
}