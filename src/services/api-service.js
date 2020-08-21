import config from '../config'

const ApiService = {
  getProblems() {
    return fetch(`${config.API_ENDPOINT}/problems`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )  
  },
  getProblemById(problemId) {
    return fetch(`${config.API_ENDPOINT}/problems/${problemId}`, {
      headers: {},
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
        ) 
  },
  getProblemTypes() {
    return fetch(`${config.API_ENDPOINT}/types`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )  
  },
  getSolutions() {
    return fetch(`${config.API_ENDPOINT}/solutions`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          :res.json()
      )
  },
}

export default ApiService