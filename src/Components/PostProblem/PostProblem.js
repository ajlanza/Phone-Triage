import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import { Link } from 'react-router-dom'

export default class PostProblem extends  Component {
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
          .then(problem => {
            problemType.value = ''
            title.value = ''
          })
          .catch(res => {
            this.setState({ error: res.error })
          })

        this.props.history.push('/')
      }
  
  render() {
    return(
      <div>
        {TokenService.hasAuthToken() 
          ? <h2>Please fill out the form to post your problem.</h2>
          : <h2>Please <Link to='/login'>log in</Link> to post a new problem. If you don't have an account, <Link to='/signup'>sign up here</Link>.</h2>
        }
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="problemType">Phone model</label>
            <select name='problemType'>
              <option value="1" name="Screen">Screen</option>
              <option value="2" name="Audio">Audio</option>
              <option value="3" name="Battery">Battery</option>
              <option value="4" name="Software">Software</option>
            </select>
          </div>
          <div>
            <label htmlFor="title">What problem are you experiencing?</label>
            <textarea required type="text" name='title' id='title' placeholder='Please describe your problem.' />
          </div>
          <button type='submit' disabled={!TokenService.hasAuthToken()}>Post problem</button>
        </form>
      </div>
    )
  }
}