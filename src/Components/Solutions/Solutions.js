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
      currentSolutionId: solutionId,
    })
  }

  render() {
    const { solutionsToProblem } = this.state;
    const { problemId } = this.props
    return (
      <div>
        <ul>
          {solutionsToProblem.length > 0
          ? <>{solutionsToProblem.map(solution => 
          <li key={solution.id} onClick={(event) => {
            this.handleSolutionTitleClick(event, problemId, solution.id)
          }}>
            <span className='solutions'>{solution.title}</span>
            <div hidden={!(this.state.currentSolutionId === solution.id)
              }>
              <Answer problemId={problemId} solutionId={solution.id} />
            </div>
          </li>
          )}</>
          
          : <li className='noSolution'>No solutions yet. Please check back later.</li>
        }
        <li>
            <Link to={{
              pathname: `/answer`,
              state: {problemId: problemId, problemType: this.props.problemType}
            }}>
            <input type='button' value='Share your solution' />
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