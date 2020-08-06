import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import SignUp from '../Signup/SignUp';
import LogIn from '../LogIn/LogIn';
import Service from '../Service/Service';
import TriageContext from '../TriageContext';
import Store from '../Store';
import './App.css';

export default class App extends Component {
  state = {
    problemType: Store.problemType,
    problems: Store.problems,
    solutions: Store.solutions, 
    users: Store.users, 
    validUser: false,
    
  };

  addUser = user => {
    console.log('in add user function')
    this.setState({
      users: [ ...this.state.users, user ],
    })
  }

  render() {
    const contextValue = {
      problemType: this.state.problemType,
      problems: this.state.problems,
      solutions: this.state.solutions,
      users: this.state.users,
      addUser: this.addUser,
    }
    return (
      <TriageContext.Provider value={contextValue}>
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
            <Route path ='/login' component={ LogIn } />
            <Route path='/service' component={ Service } />
            <Route path='/' component={ Homepage } />
          </Switch>
        </main>
      </div>
      </TriageContext.Provider>
    );
  }
}