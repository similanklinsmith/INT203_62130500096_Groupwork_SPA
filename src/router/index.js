import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Members from '../views/Members.vue'
import Songs from '../views/Songs.vue'
import Feedback from '../views/ShowFeedBack.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/members',
    name: 'Members',
    component: Members
  },
  {
    path: '/songs',
    name: 'Songs',
    component: Songs
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  //catch all 404
  {
    path: '/:catchall(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
