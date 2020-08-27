import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import TokenService from '../../services/token-service';
import TriageContext from '../TriageContext'

export default class Nav extends Component {
  static contextType = TriageContext;

  container = React.createRef();

  state = {
    open: false,
  };

  handleMenuClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  
  handleCloseMenu = e => {
    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({
        open: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleCloseMenu);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown",this.handleCloseMenu);
  }
 

  render(){
    
    return(
      <div>
        <div className="hideThis">
          <div className="navContainer" ref={this.container}>
            <button type="button" className="button" onClick={this.handleMenuClick}>☰</button>
            {this.state.open && (
              <div className="dropdown">
                <ul>
                  <li>
                    <Link to='/' className='navLink'  onClick={this.handleMenuClick}>
                      Home{"  "}
                    </Link>
                  </li>
                  
                  {!TokenService.hasAuthToken() 
                  ? <div>
                      <li>
                        <Link to='/login' className='navLink' onClick={this.handleMenuClick}>
                          Log In
                        </Link>
                      </li>
                      <li>
                        <Link to='/signup' className='navLink' onClick={this.handleMenuClick}>
                          Sign Up
                        </Link>
                      </li>
                    </div>
                  : <li>
                      <Link to='/logout' className='navLink'>
                        Log Out
                      </Link>
                    </li> 
                  }
                  <li>
                    <Link to='/service' className='navLink' onClick={this.handleMenuClick}>
                      Request Service
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className='bigScreenContainer' >
          <div className='homeLink'>
          <Link to='/' className='navLink' >
            Home{"  "}
          </Link>
          </div>
          <div className='otherLinks'>
          {!TokenService.hasAuthToken() 
          ? <>
              <Link to='/login' className='navLink'>
                Log In
              </Link>
              <Link to='/signup' className='navLink'>
                Sign Up
              </Link>
            </>
          : <Link to='/logout' className='navLink'>
              Log Out
            </Link> 
          }
          <Link to='/service' className='navLink'>
            Request Service
          </Link>
          </div>
        </div>
      </div>
    );
  }
}