import React, { Component } from 'react';

export default class Service extends Component {
    
  render() {
    return (
      <div>
        <h2>Please fill out the form to request service.</h2>
        <form className='service-form'>
          <div>
            <label htmlFor="address">Address</label>
            <input placeholder='Where should we meet you.' type="text" name='first-name' id='first-name' />
          </div>
          <div>
            <label htmlFor="model">Phone model</label>
            <select>
              <option value="Iphone">Iphone</option>
              <option value="LG">LG</option>
              <option value="Moto">Moto</option>
              <option value="Samsung">Samsung</option>
            </select>
          </div>
          <div>
            <label htmlFor="username">Email</label>
            <input type="text" name='username' id='username' />
          </div>
          <div>
            <label htmlFor="phone-number">Phone number where you can be reached</label>
            <input type="phone-number" name='phone-number' id='phone-number' />
          </div>
          <div>
            <label htmlFor="details">Details of problem</label>
            <textarea name='details' id='details' placeholder='Please describe the problem you are having.' />
          </div>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}