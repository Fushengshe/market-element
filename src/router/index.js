import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import components from '../components/components'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component (resolve) {
        require.ensure(['@/pages/index.vue'], () => {
          resolve(require('@/pages/index.vue'))
        })
      }
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
    }
  ]
})

// 验证 token，存在才跳转
router.beforeEach((to, from, next) => {
	let token = localStorage.getItem('token')
	if(to.meta.requireAuth) {
		if(token) {
			next()
		} else {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			})
		}
	} else {
		next()
	}
})

export default router
