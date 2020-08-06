import React, { Component } from 'react';
import TriageContext from '../TriageContext';

export default class SignUp extends Component {
  static contextType = TriageContext;
  state = {
    addUser: '',
  }

  handleSubmit = e => {
    e.preventDefault()
    e.persist()
    const username = e.target.username.value;
    const password = e.target.password.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const user = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
    }
    this.context.addUser(user)
    this.props.history.push('/')
  }

  render() {
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
            <input required type="text" name='username' id='username' placeholder='Username '/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input required type="password" name='password' id='password' />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    )
  }
}