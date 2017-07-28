import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component (resolve) {
        require.ensure(['@/pages/login.vue'], () => {
          resolve(require('@/pages/login.vue'))
        })
      },
      beforeEnter: (to, from, next) => {
        let token = localStorage.getItem('token')
        if (to) {
          if (token) {
            next({
              path: '/index',
              query: {redirect: to.fullPath}
            })
          } else {
            next()
          }
        } else {
          next()
        }
      }
    },
    {
      path: '/register',
      name: 'register',
      component (resolve) {
        require.ensure(['@/pages/register.vue'], () => {
          resolve(require('@/pages/register.vue'))
        })
      },
      beforeEnter: (to, from, next) => {
        let token = localStorage.getItem('token')
        if (to) {
          if (token) {
            next({
              path: '/index',
              query: {redirect: to.fullPath}
            })
          } else {
            next()
          }
        } else {
          next()
        }
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
      redirect: 'home',
      children: [
        {
          path: '/home',
          name: 'home',
          component (resolve) {
            require.ensure(['@/pages/home/home.vue'], () => {
              resolve(require('@/pages/home/home.vue'))
            })
          }
        },
        {
          path: '/cart',
          name: 'cart',
          component (resolve) {
            require.ensure(['@/pages/home/cart.vue'], () => {
              resolve(require('@/pages/home/cart.vue'))
            })
          },
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/me',
          name: 'me',
          component (resolve) {
            require.ensure(['@/pages/home/mine/me.vue'], () => {
              resolve(require('@/pages/home/mine/me.vue'))
            })
          },
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/order',
          name: 'order',
          component (resolve) {
            require.ensure(['@/pages/home/mine/order.vue'], () => {
              resolve(require('@/pages/home/mine/order.vue'))
            })
          },
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/collection',
          name: 'collection',
          component (resolve) {
            require.ensure(['@/pages/home/mine/collection.vue'], () => {
              resolve(require('@/pages/home/mine/collection.vue'))
            })
          },
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/history',
          name: 'history',
          component (resolve) {
            require.ensure(['@/pages/home/mine/history.vue'], () => {
              resolve(require('@/pages/home/mine/history.vue'))
            })
          },
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/card',
          name: 'card',
          component (resolve) {
            require.ensure(['@/pages/home/mine/card.vue'], () => {
              resolve(require('@/pages/home/mine/card.vue'))
            })
          },
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/setting',
          name: 'setting',
          component (resolve) {
            require.ensure(['@/pages/home/mine/setting.vue'], () => {
              resolve(require('@/pages/home/mine/setting.vue'))
            })
          }
        },
        {
          path: '/about',
          name: 'about',
          component (resolve) {
            require.ensure(['@/pages/home/mine/about.vue'], () => {
              resolve(require('@/pages/home/mine/about.vue'))
            })
          }
        }
      ]
    },
    {
      path: '/store',
      name: 'store',
      component (resolve) {
        require.ensure(['@/pages/store/store.vue'], () => {
          resolve(require('@/pages/store/store.vue'))
        })
      }
    },
    {
      path: '/storeCard',
      name: 'storeCard',
      component (resolve) {
        require.ensure(['@/pages/store/storeCard.vue'], () => {
          resolve(require('@/pages/store/storeCard.vue'))
        })
      }
    },
    {
      path: '/good',
      name: 'good',
      component (resolve) {
        require.ensure(['@/pages/store/good.vue'], () => {
          resolve(require('@/pages/store/good.vue'))
        })
      }
    },
    {
      path: '/storeInfo',
      name: 'storeInfo',
      component (resolve) {
        require.ensure(['@/pages/store/storeInfo.vue'], () => {
          resolve(require('@/pages/store/storeInfo.vue'))
        })
      },
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/hello',
      name: 'hello',
      component (resolve) {
        require.ensure(['@/components/Hello.vue'], () => {
          resolve(require('@/components/Hello.vue'))
        })
      },
      meta: {
        requireAuth: true
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
        path: '/',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

export default router
