import config from '../config'

const AuthApiService = {
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e=> Promise.reject(e))
          : res.json()
      )
  },

  postProblem(problem) {
    return fetch(`${config.API_ENDPOINT}/problems`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(problem),
    })
      .then(res =>
        (!res.ok)
          ?res.json().then(e=> Promise.reject(e))
          :res.json()
      )
  },
  updateWorkedCount(solutionId, newWorkedCount) {
    return fetch(`${config.API_ENDPOINT}/solutions/${solutionId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newWorkedCount)
    })
      .then(res =>
        (!res.ok)
          ?res.json().then(e=> Promise.reject(e))
          :res.json()
      )
  },
}

export default AuthApiService