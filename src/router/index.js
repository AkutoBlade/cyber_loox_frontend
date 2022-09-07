import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'
import SingleView from '../views/SingleView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingView
  },
  {
    path: '/products',
    name: 'products',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/users/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/users/login',
    name: 'login',
    component: LoginView
  }, 
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  }, 
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },   {
    path: '/product/:id',
    name: 'single',
    component: SingleView,
    props: true
  }, 
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    props: true
  }, 
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
