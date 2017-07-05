import instance from '../axios'

export default {
  getUser (data) {
    return instance.get('/api/user', data)
  },
  userRegister (data) {
    return instance.post('/api/register', data)
  },
  userLogin (data) {
    return instance.post('/api/login', data)
  }
}
