import axios from 'axios'

// 实例化一个axios
const instance = axios.create({
  baseURL: 'http://123.206.18.103/Market_BE/public/index.php/admin/auth',
  timeout: 5000
  // headers: {'X-Custom-Header': 'foobar'}
})
instance.defaults.headers.post['Content-Type'] = 'application/json'//
// axios拦截器配置，先判断有没有token，有就加上，没有拦截报错
axios.interceptors.request.use = instance.interceptors.request.use

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
