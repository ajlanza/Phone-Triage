import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import TriageContext from '../TriageContext';

export default class NewLogin extends Component {
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
        // this.handleLoginSuccess()

        TokenService.saveAuthToken(res.authToken)
        
        
        
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  handleLoginSuccess(){
    // const { location, history } = this.props
    // const destination = (location.state || {}.from || '/')
    // history.push(destination)
    console.log('Logged In')
    this.setState({
      loggedIn: true
    })
    this.context.setAuthorized()
  }

  render() {
    //const { error } = this.state
    // const user = users[1]
    // console.log(user)
    
    return(
      <div>
        {this.state.loggedIn ? <h1>Successfully logged in</h1> : ''}
        <form className='login' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='username'>User name:</label>
            <input type='text' name='username' id='username' placeholder='Username' />
          </div>
          <div>
            <label htmlFor='password'>Password:  </label>
            <input type='password' name='password' id='password' placeholder='Password'/>
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