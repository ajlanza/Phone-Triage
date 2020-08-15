import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import SignUp from '../Signup/SignUp';
import LogIn from '../LogIn/LogIn';
import Service from '../Service/Service';
import LogOut from '../LogOut/LogOut';
import PostProblem from '../PostProblem/PostProblem';
import './App.css';

export default class App extends Component {

  render() {
   
    return (
      <div className='App'>
        <nav>
          <Nav />
        </nav>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route path='/signup' component={ SignUp } />
            <Route path='/login' component={ LogIn } />
            <Route path='/logout' component={ LogOut } />
            <Route path='/service' component={ Service } />
            <Route path='/problem' component={ PostProblem } />
            <Route path='/' component={ Homepage } />
          </Switch>
        </main>
      </div>
    );
  }
}