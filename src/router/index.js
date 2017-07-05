import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component (resolve) {
        require.ensure(['@/pages/home/index.vue'], () => {
          resolve(require('@/pages/home/index.vue'))
        })
      }
    },
    {
      path: '/hello',
      name: 'hello',
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
      name: 'client',
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

// 验证 token，存在才跳转
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (to.meta.requireAuth) {
    if (token) {
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
