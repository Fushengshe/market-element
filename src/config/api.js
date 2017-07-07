import instance from '../axios'

export default {
  getUser (data) {
    return instance.get('http://127.0.0.1:3000/api/user', data)
  },
  userRegister (data) {
    return instance.post('http://127.0.0.1:3000/api/register', data)
  },
  userLogin (data) {
    return instance.post('http://127.0.0.1:3000/api/login', data)
  }
}
