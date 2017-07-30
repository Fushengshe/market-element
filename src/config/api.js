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
  },
  getCartData (data) {
    return instance.get('../../static/data/cartData.json', data)
  },
  getStoreData (data) {
    return instance.get('../../static/data/storeData.json', data)
  },
  getGoodData (data) {
    return instance.get('../../static/data/goodData.json', data)
  }
}
