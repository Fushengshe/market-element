import * as types from './types'

const mutations = {
  [types.LOGIN]: (state, data) => {
    localStorage.setItem('token', data)
    localStorage.setItem('login', true)
    state.token = data
    state.login = true
  },
  [types.LOGOUT]: (state) => {
    localStorage.removeItem('token')
    state.login = true
  },
  [types.USERID]: (state, data) => {
    localStorage.setItem('userID', data)
    state.username = data
  }
}
export default mutations
