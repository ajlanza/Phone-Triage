import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends Component {
  render() {
    return (
      <div className='bigScreenContainer' >
        <Link to='/' className='navLink' >
        Home{"  "}
      </Link>
      <Link to='/signup' className='navLink'>
        Sign Up
      </Link>
      <Link to='/login' className='navLink'>
        Log In
      </Link>
      <Link to='/service' className='navLink'>
        Request Service
      </Link>
    </div>
    )
  }
}