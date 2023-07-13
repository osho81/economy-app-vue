import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListUsers from '../views/ListUsers.vue'
import EditUser from '../views/EditUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/listusers', // Temporary view; since users not allowed see other users
      name: 'listusers',
      component: ListUsers
    },
    {
      path: '/edituser/:username',  
      name: 'edituser',
      component: EditUser, 
      props: true // Enabling props in navigation, see ListUsers editUser method 
    },
  ]
})

export default router
