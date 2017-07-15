import instance from '../axios'

export default {
  getUser (data) {
    return instance.get('/user', data)
  },
  userRegister (data) {
    return instance.post('/register', data)
  },
  userLogin (data) {
    return instance.post('/login', data)
  }
}
