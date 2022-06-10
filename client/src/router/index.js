import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/Root'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import CreateSong from '@/components/CreateSong'
import V2CreateSong from '@/components/V2CreateSong'
import Versions from '@/components/Versions'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Root
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/create-song',
      name: 'Create Song',
      component: V2CreateSong
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    },
    {
      path: '/versions',
      name: 'versions',
      component: Versions
    }
  ]
})
