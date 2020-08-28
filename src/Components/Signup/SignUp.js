import React, { Component } from 'react';
import TriageContext from '../TriageContext';
import AuthApiService from '../../services/auth-api-service';
import './SignUp.css';
import SweetAlert from 'sweetalert2';

export default class SignUp extends Component {
  static contextType = TriageContext;
  state = {
    password: '',
    confirm: '',
    match: false,
    error: null
  }

  handleSubmit = e => {
    e.preventDefault()
    e.persist()
    const username = e.target.username;
    const password = e.target.password;
    const firstName = e.target.firstName;
    const lastName = e.target.lastName;
    this.setState({ error: null })
    const user = {
      username: username.value,
      password: password.value,
      first_name: firstName.value,
      last_name: lastName.value,
    }
    AuthApiService.postUser(user)
      .then(user => {
        username.value = ''
        password.value = ''
        firstName.value = ''
        lastName.value = ''
        SweetAlert.fire(
          'Success',
          'New account created',
          'success'
        )
        this.props.history.push({pathname: `/login`, state: { justRegistered: true } });
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

  confirmPassword = e => {
    // get the value of the field that was changed
    const value = e.target.value;
    // set the state of the changed field to the new value
    this.setState({
      [e.target.name]: value
    }, () => { 
      // after state is set, check if passwords match and change state accordingly
      if(this.state.password === this.state.confirm && this.state.password.length > 7){
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
    return (
      <div>
        <h3>Please fill out the form to register an account.</h3>
        <p>Usernames must be unique and passwords must be at least 8 characters long.</p>
        <form className='signup-form' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First name:</label>
            <input required type="text" name='firstName' id='firstName' placeholder='First Name' />
          </div>
          <div>
            <label htmlFor="lastName">Last name:</label>
            <input required type="text" name='lastName' id='lastName' placeholder='Last Name' />
          </div>
          <div>
            <label htmlFor="username">Username:</label>
            <input required type="text" name='username' id='username' placeholder='Username' />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            {/* apply class to input field depending on whether or not password match is confirmed */}
            <input required type="password" name='password' id='password' className={this.state.match ? 'confirmed' : 'unconfirmed'} onChange={this.confirmPassword}/>
          </div>
          <div>
            <label htmlFor="password-confirmation" >Confirm Password:</label>
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