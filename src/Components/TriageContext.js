import React, { Component } from 'react';

const TriageContext = React.createContext({
  problemTypes: [],
  problems: [],
  solutions: [],
  users: [],
  setError: () => {},
  clearError: () => {},
  setProblems: () => {},
  setProblemTypes: () => {},
  setSolutions: () => {},
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
    }
    return (
      <TriageContext.Provider value={value}>
        {this.props.children}
      </TriageContext.Provider>
    )
  }
}