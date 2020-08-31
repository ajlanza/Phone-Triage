import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';
import './Service.css';

export default class Service extends Component {
  state={
    formSubmitted: false
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
        formSubmitted: true
    })    
  }

  componentDidMount
  render() {
    return (
      <div className='service'>
        {this.state.formSubmitted 
          ? <h3>Your service request has been submitted.<br/> Thank you for using Phone Triage.</h3>
          :
      <div className='service'>
        {/* Change the header depending on whether the user has signed in or not */}
        {TokenService.hasAuthToken() 
        ? <h3>Please fill out the form to request service.</h3> 
        : <h3>Please <Link to='/login'>sign in</Link> to request service</h3> }
        <form className='service-form' onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="address">Address:</label> <br />
            <input placeholder='Where should we meet you.' type="text" name='address' id='address' />
          </div>
          <div>
            <label htmlFor="model">Phone model:</label> <br />
            <select>
              <option value="Iphone">Iphone</option>
              <option value="LG">LG</option>
              <option value="Moto">Moto</option>
              <option value="Samsung">Samsung</option>
            </select>
          </div>
          <div>
            <label htmlFor='email'>Email:</label> <br />
            <input required type="email" name='email' id='email' />
          </div>
          <div>
            <label htmlFor="phone-number">Phone number where you can be reached:</label> <br />
            <input type="phone-number" name='phone-number' id='phone-number' />
          </div>
          <div>
            <label htmlFor="details">Details of problem:</label> <br />
            <textarea name='details' id='details' placeholder='Please describe the problem.' />
          </div>
          {/* disable the submit button until user has signed in */}
          <button type='submit' disabled={!TokenService.hasAuthToken()}>Submit</button>
        </form>
      </div>
       }
      </div>
    )
  }
}