import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import AuthApiService from '../../services/auth-api-service';
import './SignUp.css';

export default class SignUp extends Component {
  static contextType = TriageContext;
  state = {
    // addUser: '',
    password: '',
    confirm: '',
    match: false,
    error: null
  }

  handleSubmit = e => {
    e.preventDefault()
    e.persist()
    const username = e.target.username.value;
    const password = e.target.password.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    this.setState({ error: null })
    const user = {
      username: username,
      password: password,
      first_name: firstName,
      last_name: lastName,
    }
    AuthApiService.postUser(user)
      .then(user => {
        username.value = ''
        password.value = ''
        firstName.value = ''
        lastName.value = ''
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
    //this.context.addUser(user)
    this.props.history.push('/')
  }

  confirmPassword = e => {
    // get the value of the field that was changed
    const value = e.target.value;
    // set the state of the changed field to the new value
    this.setState({
      [e.target.name]: value
    }, () => { 
      // after state is set, check if passwords match and change state accordingly
      if(this.state.password === this.state.confirm){
        console.log('passwords match')
        this.setState({
          match: true
        })
      } else {
        this.setState({
          match: false
      })
    }
    })
      
  }

  render() {
    //const { error } = this.state
    return (
      <div>
        <h2>Please fill out the form to register an account.</h2>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First name</label>
            <input required type="text" name='firstName' id='firstName' placeholder='First Name' />
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input required type="text" name='lastName' id='lastName' placeholder='Last Name' />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input required type="text" name='username' id='username' placeholder='Username' />
          </div>
          <div>
            <label htmlFor="password">Password </label>
            {/* apply class to input field depending on whether or not password match is confirmed */}
            <input required type="password" name='password' id='password' className={this.state.match ? 'confirmed' : 'unconfirmed'} onChange={this.confirmPassword}/>
          </div>
          <div>
            <label htmlFor="password-confirmation" >Confirm Password</label>
            {/* apply class to input field depending on whether or not password match is confirmed */}
            <input required type="password" name='confirm' id='confirm' className={this.state.match ? 'confirmed' : 'unconfirmed'} onChange={this.confirmPassword}/>
          </div>
          {/* if passwords don't match disable the submit button */}
          <button type='submit' disabled={!this.state.match}>Sign Up</button>
        </form>
      </div>
    )
  }
}