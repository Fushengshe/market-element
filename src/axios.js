import axios from 'axios'

axios.default.timeout = 5000
// 实例化一个axios
const instance = axios.create()
instance.defaults.headers.post['Content-Type'] = 'application/json'//
// axios拦截器配置，先判断有没有token，有就加上，没有拦截报错
axios.interceptors.request.use = instance.interceptors.request.use
// 注释这边没懂为啥，去了会报莫名其妙的错
instance.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    config.headers.Autorization = `token ${localStorage.getItem('token')}`.replace(/(^")|("$)/g, '')
  }
  return config
}, (err) => {
  return Promise.reject(err)
})

instance.interceptors.request.use(response => {
  return response
}, (err) => {
  return Promise.reject(err)
})

export default instance
