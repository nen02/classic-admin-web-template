import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Components from '../views/Components.vue'
import FileWord from '../views/FileWord.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/components',
    name: 'Components',
    component: Components
  },
  {
    path: '/files/word',
    name: 'FileWord',
    component: FileWord
  },
  {
    path: '/files',
    name: 'Files',
    component: FileWord
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

export default router
