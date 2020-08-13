import React, { Component } from 'react';

const TriageContext = React.createContext({
  problemTypes: [],
  problems: [],
  solutions: [],
  users: [],
  addUser: () => {},
  setError: () => {},
  clearError: () => {},
  setProblems: () => {},
  setProblemTypes: () => {},
  setSolutions: () => {},
  setAuthorized: () => {},
})
export default TriageContext

export class TriageContextProvider extends Component {
  state = {
    problems: [],
    problemTypes: [],
    solutions: [],
    error: null,
    authorized: false,
  };

  setProblems = problems => {
    this.setState({ problems })
  }

  setProblemTypes = problemTypes => {
    this.setState({ problemTypes })
  }
  
  setSolutions = solutions => {
    this.setState({ solutions })
  }

  setAuthorized = authorized => {
    this.setState ({ authorized })
    console.log('in setAuthorized from TriageContext')
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render(){
    const value = {
      problems: this.state.problems,
      problemTypes: this.state.problemTypes,
      solutions: this.state.solutions,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setProblems: this.setProblems,
      setProblemTypes: this.setProblemTypes,
      setSolutions: this.setSolutions,
      setAuthorized: this.setAuthorized,
    }
    return (
      <TriageContext.Provider value={value}>
        {this.props.children}
      </TriageContext.Provider>
    )
  }
}