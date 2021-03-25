import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addProduct',
    name: 'AddProdcut',
    component: () => import('../views/AddProduct.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Login' && localStorage.access_token) {
    next({ name: 'Home' })
  }
  if (to.name !== 'Login' && !localStorage.access_token) {
    next({ name: 'Login' })
  } else next()
})

export default router
