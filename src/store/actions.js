import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/index'
import * as types from './types'

export default {
  UserLogin({ commit }, data) {
    commit(types.LOGIN, data)
  },
  
  UserLogout({ commit }) {
    commit(types.LOGOUT)
  },

  UserName({ commit }, data) {
    commit(types.USERNAME, data)
  }
}
