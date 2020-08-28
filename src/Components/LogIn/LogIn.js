import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import TriageContext from '../TriageContext';
import SweetAlert from 'sweetalert2';
import './LogIn.css';

export default class LogIn extends Component {
  static contextType = TriageContext;

  static defaultProps = {
    location: {
      state: {}
    },
    history: {
      push: () => {},
    },
  }

  state = { 
    error: null, 
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
        this.props.history.goBack();
      })
      .catch(res => {
        this.setState({ error: res.error })
        SweetAlert.fire({
          icon: 'error',
          title: res.error,
          text: 'Please try again.'
        })
      })
  }


  render() {
    
    return(
      <div className='login'>
        <h3>Please log in to access all features of Phone Triage.</h3>
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
      </div>
    )
  }
}