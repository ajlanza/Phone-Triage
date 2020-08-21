import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import TriageContext from '../TriageContext';
import SweetAlert from 'sweetalert2';

export default class LogIn extends Component {
  static contextType = TriageContext;

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  state = { 
    error: null, 
    loggedIn: false,
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.setState({ error: null })
    const { username, password } = ev.target
    
    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken) 
        this.props.history.goBack()       
      })
      .catch(res => {
        this.setState({ error: res.error })
        SweetAlert.fire({
          icon: 'error',
          title: 'Incorrect username or password!',
          text: 'Please try again.'
        })
      })

  }


  render() {
    
    return(
      <div>
        {this.state.loggedIn ? <h1>Successfully logged in</h1> : ''}
        <form className='login' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='username'>Username:</label>
            <input required type='text' name='username' id='username' placeholder='Username' />
          </div>
          <div>
            <label htmlFor='password'>Password:  </label>
            <input required type='password' name='password' id='password' placeholder='Password'/>
          </div>
          <button type='submit' >Log In</button>
        </form>
        {/* if username and password don't match inform user */}
        {this.state.hasError ? <p>invalid credentials</p> : ''}
        {/* if succsessfully logging in welcome user*/}
        {this.state.validUser ? <p>Welcome {this.state.firstName}!</p> : ''}
        
      </div>
    )
  }
}