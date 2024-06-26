import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListUsers from '../views/ListUsers.vue'
import EditUser from '../views/EditUser.vue'
import AddUser from '../views/AddUser.vue'
import AddSavingsGoal from '../views/AddSavingsGoal.vue'
import ListSavingsGoals from '@/views/ListSavingsGoals.vue'

// These pages/contents will be displayed, since this is set in App.vue

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
    {
      path: '/adduser',
      name: 'adduser',
      component: AddUser,
      props: true // Remove if not needed for this route/component
    },
    {
      path: '/listsavingsgoals', // Temporary view; since users not allowed see other users
      name: 'listsavingsgoals',
      component: ListSavingsGoals
    },
    {
      path: '/addsavingsgoal',
      name: 'addsavingsgoal',
      component: AddSavingsGoal,
      props: true // Remove if not needed for this route/component
    },
  ]
})

export default router
