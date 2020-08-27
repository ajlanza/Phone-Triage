import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import { Link } from 'react-router-dom';
import ApiService from '../../services/api-service';
import SweetAlert from 'sweetalert2';
import './PostAnswer.css';



export default class PostProblem extends  Component {
  state = {
    error: null,
    problemToAnswer: ''
  }
  
  componentDidMount() {
    let problemToAnswer;
    const problemId = parseInt(this.props.location.state.problemId);
    ApiService.getProblemById(problemId)
      .then((data) => {
        problemToAnswer = data.title
        if(problemToAnswer.length > 0){
          this.setState({
            problemToAnswer
          })
        }
      })
  }

  handleSubmit = e => {
    e.preventDefault()
    e.persist()
        const title = e.target.title.value;
        const content = e.target.answer.value;
        const problemId = parseInt(this.props.location.state.problemId);
        const problemType = parseInt(this.props.location.state.problemType);
        this.setState({ error: null })
        const answer = {
          problem_id: problemId,
          problem_type: problemType,
          title: title,
          content: content,
          worked_count: 0
        }
        AuthApiService.postAnswer(answer)
          .then(res => {
            e.target.title.value = ''
            e.target.answer.value = ''
            SweetAlert.fire(
              'Submitted',
              'Thanks for submitting a solution.',
              'success'
            )
            this.props.history.goBack();
          })
          .catch(res => {
            this.setState({ error: res.error })
            SweetAlert.fire({
              icon: 'error',
              title: this.state.error,
              text: 'Please try again.'
            })
          })
    }

  render() {
    return(
        <div className='postAnswer'>
          {/* If the user is logged in allow then to submit the form, otherwise inform them to log in or sign up */}
          {TokenService.hasAuthToken() 
            ? <div><h3>Problem to answer: </h3> <h4>"{this.state.problemToAnswer}"</h4></div>
            : <h3><Link to='/login'>Log in</Link> to post a solution. If you don't have an account, <Link to='/signup'>sign up here</Link>.</h3>
          } 
            <form className='answer-form' onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor='title'>Title of your solution:</label> <br/>
                <input required type='text' name='title' id='title' placeholder='Title' /><br />
              </div>
              <div>
                <label htmlFor='answer'>Solution:</label><br />
                <textarea required type='text' name='answer' id='answer' placeholder='Steps to fix problem.' />
              </div>
              <button type='submit' disabled={!TokenService.hasAuthToken()}>Post answer</button>
            </form>        
      </div>
    )
  }
}