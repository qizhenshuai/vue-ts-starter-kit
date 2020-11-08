
import { RouteRecordRaw } from 'vue-router'

export const Home: RouteRecordRaw = {
  name: 'Home',
  path: '/',
  component: () => import(/* webpackChunkName: 'home' */'@/pages/Home.vue')
}

export const About: RouteRecordRaw = {
  name: 'About',
  path: '/about',
  component: () => import(/* webpackChunkName: 'about' */'@/pages/About.vue')
}

const constantRoutes = [Home, About]

export default constantRoutes
