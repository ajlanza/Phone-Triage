import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import SweetAlert from 'sweetalert2';

export default class Homepage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  componentDidMount() {
    TokenService.clearAuthToken();
    SweetAlert.fire(
      'Logged Out',
      'Thanks for using Phone Triage.',
      'success'
    )
    this.props.history.push('/'); 
  }  
  render() {
      return (
        <div>
          <p>You've been logged out.</p>
        </div>
      )
    }
  }