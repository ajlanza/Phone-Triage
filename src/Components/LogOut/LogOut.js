import React, { Component } from 'react';
import TokenService from '../../services/token-service';

export default class Homepage extends Component {
    render() {
      TokenService.clearAuthToken();
      return (
        <div>
          <p>You've been logged out.</p>
        </div>
      )
    }
  }