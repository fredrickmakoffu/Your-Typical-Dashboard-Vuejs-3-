import { createRouter, createWebHistory } from 'vue-router'

function view (path) {
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
  return () => import(/* webpackChunkName: '' */ `../views/${path}`).then(m => m.default || m)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: view('Home.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: view('Admin.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: view('Dashboard.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component: view('Login.vue')
  },

  {
    path: '/register',
    name: 'Register',
    component: view('Register.vue')
  },

  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: view('ForgotPassword.vue')
  },

  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: view('ResetPassword.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
