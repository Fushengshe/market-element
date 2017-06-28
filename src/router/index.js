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

export default router
