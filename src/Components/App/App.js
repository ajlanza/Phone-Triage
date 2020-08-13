import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
// import ApiService from '../../services/api-service';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import SignUp from '../Signup/SignUp';
import NewLogin from '../LogIn/NewLogin';
import Service from '../Service/Service';
import LogOut from '../LogOut/LogOut';
import PostProblem from '../PostProblem/PostProblem';
// import TriageContext, { TriageContextProvider } from '../TriageContext';
// import Store from '../Store';
import './App.css';

export default class App extends Component {
  // static contextType = TriageContext

  // state = {
  //   problemType: [],
  //   problems: this.context.problems,
  //   solutions: Store.solutions, 
  //   users: Store.users, 
  //   validUser: false,
  // };

  // componentDidMount() {
  //   this.context.clearError()
  //   ApiService.getProblemTypes()
  //     .then(this.context.setProblemTypes)
  //     .catch(this.context.setError)
  // }
  addUser = user => {
    console.log('in add user function')
    this.setState({
      users: [ ...this.state.users, user ],
    })
  }

  render() {
    // const contextValue = {
    //   //problemType: this.context.problemType,
    //   problems: Store.problems,
    //   solutions: Store.solutions,
    //   users: Store.users,
    //   addUser: this.addUser,
    // }
    return (
      //<TriageContextProvider value={contextValue}>
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
            <Route path='/login' component={ NewLogin } />
            <Route path='/logout' component={ LogOut } />
            <Route path='/service' component={ Service } />
            <Route path='/problem' component={ PostProblem } />
            <Route path='/' component={ Homepage } />
          </Switch>
        </main>
      </div>
      //</TriageContextProvider>
    );
  }
}