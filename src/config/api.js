import instance from '../axios'

export default {
  getUser (data) {
    return instance.get('/auth/user', data)
  },
  userRegister (data) {
    return instance.post('/auth/register', data)
  },
  userLogin (data) {
    return instance.post('/auth/login', data)
  },
  forget (data) {
    return instance.post('/forget/sendcode', data)
  },
  reset (data) {
    return instance.post('/forget/resetPassword', data)
  },
  getCartData (data) {
    return instance.get('../../static/data/cartData.json', data)
  },
  getStoreData (data) {
    return instance.get('../../static/data/storeData.json', data)
  },
  getGoodData (data) {
    return instance.get('../../static/data/goodData.json', data)
  },
  collectGood (data) {
    return instance.post('/goods/collect', data)
  },
  collectStore (data) {
    return instance.post('', data)
  }
}
