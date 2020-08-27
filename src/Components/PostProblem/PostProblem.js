import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import { Link } from 'react-router-dom';
import './PostProblem.css';
import SweetAlert from 'sweetalert2';

export default class PostProblem extends  Component {
  state = {
    error: null,
  }

  handleSubmit = e => {
    e.preventDefault()
    e.persist()
       
        const problemType = e.target.problemType.value;
        const title = e.target.title.value;
        this.setState({ error: null })
        const problem = {
          problem_type: parseInt(problemType),
          title: title,
        }
        AuthApiService.postProblem(problem)
          .then(res => {
            e.target.problemType.value = 1
            e.target.title.value = ''
            this.props.history.goBack();
            SweetAlert.fire(
              'Thank you.',
              'Your problem has been posted.',
              'success'
            )
          })
          .catch(res => {
            this.setState({ error: res.error })
          })
      }
  
  render() {
    return(
      <div className='postProblem'>
        {/* If the user is logged in allow them to submit the form, otherwise inform them to log in or sign up */}
        {TokenService.hasAuthToken() 
          ? <h3>Please fill out the form to post your problem.</h3>
          : <h3>Please <Link to='/login'>log in</Link> to post a new problem. If you don't have an account, <Link to='/signup'>sign up here</Link>.</h3>
        }
          <form className='signup-form' onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="problemType">Problem type: </label>
              <select name='problemType' id='problemType'>
                <option value="1" name="Screen">Screen</option>
                <option value="2" name="Audio">Audio</option>
                <option value="3" name="Battery">Battery</option>
                <option value="4" name="Software">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="title">What problem are you experiencing?</label><br />
              <textarea required type="text" name='title' id='title' placeholder='Please describe your problem.' />
            </div>
            <button type='submit' disabled={!TokenService.hasAuthToken()}>Post problem</button>
          </form>      
      </div>
    )
  }
}