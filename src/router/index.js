import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import components from '../components/components'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/home'
    },
    {
      path: '/hello',
      name: 'Hello',
      component (resolve) {
        require.ensure(['@/components/Hello.vue'], () => {
          resolve(require('@/components/Hello.vue'))
        })
      }
    },
    {
      path: '/components',
      name: 'components',
      component (resolve) {
        require.ensure(['@/components/components.vue'], () => {
          resolve(require('@/components/components.vue'))
        })
      }
    },
    {
      path: '/index',
      name: 'index',
      meta: {
        requireAuth: true
      },
      component (resolve) {
        require.ensure(['@/pages/home/index.vue'], () => {
          resolve(require('@/pages/home/index.vue'))
        })
      },
      children: [
        {
          path: 'home',
          name: 'home',
          component (resolve) {
            require.ensure(['@/pages/home/home.vue'], () => {
              resolve(require('@/pages/home/home.vue'))
            })
          }
        },
        {
          path: 'card',
          name: 'card',
          component (resolve) {
            require.ensure(['@/pages/home/card.vue'], () => {
              resolve(require('@/pages/home/card.vue'))
            })
          }
        },
        {
          path: 'cart',
          name: 'cart',
          component (resolve) {
            require.ensure(['@/pages/home/cart.vue'], () => {
              resolve(require('@/pages/home/cart.vue'))
            })
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component (resolve) {
        require.ensure(['@/pages/login.vue'], () => {
          resolve(require('@/pages/login.vue'))
        })
      }
    },
    {
      path: '/register',
      name: 'register',
      component (resolve) {
        require.ensure(['@/pages/register.vue'], () => {
          resolve(require('@/pages/register.vue'))
        })
      }
    },
    {
      path: '*',
      name: 'not-found',
      component (resolve) {
        require.ensure(['@/pages/404.vue'], () => {
          resolve(require('@/pages/404.vue'))
        })
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
     /* eslint-disable no-constant-condition */
     // TODO: 在这里实现安全路由功能，对不安全的访问进行拦截。检测在路由的参数中是否有 requireAuth 字段以及store中的login状态。
    if (true) {  // 通过vuex state获取当前的token是否存在
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})
export default router
