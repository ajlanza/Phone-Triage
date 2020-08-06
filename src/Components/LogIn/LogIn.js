import React, { Component } from 'react';
import TriageContext from '../TriageContext';

export default class LogIn extends Component {
  static contextType = TriageContext
  state = {
    username: '',
    password: '',
    hasError: false,
    validUser: false,
  }

  handleSubmit = e => {
    e.preventDefault()
    e.persist()
    const username = e.target.username.value
    const password = e.target.password.value
    this.setState({
      username: username,
      password: password,
      // validUser: false,
    }, () => {this.validateUser(username) }); 
  }

  validateUser(username) {
    console.log('validate user function running')
    const { users } = this.context;
    const user = users.find(user => user.username === username)
    // console.log('context: ', user.username, ' ', user.password)
    // console.log('state', this.state.username, ' ', this.state.password)
    if(!user){
      this.setState({
        hasError: true,
        validUser: false,
      })
      return
    }
    if(user.password !== this.state.password) {
      this.setState({
        hasError: true,
        validUser: false,
      })
      return { hasError: true }
    }
    if (user.password === this.state.password) {
      this.setState({
        hasError: false,
        validUser: true,
        firstName: user.firstName,
        lastName: user.lastName,
      })
    } 
  }

  render() {
    
    // const user = users[1]
    // console.log(user)
    
    return(
      <div>
        <h1>Log In page</h1>
        <form className='login' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name='username' id='username' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' />
          </div>
          <button type='submit'>Log In</button>
        </form>
        {/* if username and password don't match inform user */}
        {this.state.hasError ? <p>invalid credentials</p> : ''}
        {/* if succsessfully loging in welcome user*/}
        {this.state.validUser ? <p>Welcome {this.state.firstName}!</p> : ''}
        
      </div>
    )
  }
}