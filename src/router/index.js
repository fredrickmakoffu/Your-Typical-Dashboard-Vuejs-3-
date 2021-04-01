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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
