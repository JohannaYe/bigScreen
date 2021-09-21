import Vue from 'vue'
import VueRouter from 'vue-router'

import Center from '../views/1-center/Center'
import Ox from '../views/2-ox/myOx'
// import Pasture from '../views/3-pasture/Pasture'
import MyPasture from "@/views/3-pasture/MyPasture"
// import Divide from '../views/4-divide/Divide'
import TMR from '../views/5-TMR/TMR'
import Weight from '../views/6-weight/myweight'
import AES from '../views/7-AES/AES'
import village from '../views/7-village/village'
import three from '../views/7-village/child/threepillar'
import Trace from '../views/8-trace/trace'

import Monitor from '../views/11-monitor/Monitor'

import Weather from '../components/Weather'
import bigmap2 from '../components/bigmap2'
import bigmap3 from '../components/bigmap3'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/mycenter'
  },
  {
    path: 'lunbo',
    name: 'lunbo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Rotation.vue')
  },
    {
        path: '/map2',
        name: 'map2',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/components/bestmap.vue')
    },
  {
    path: '/map',
    name: 'map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/newmap.vue')
  },

  {
    path: '/ox',
    component: Ox
  },
  {
    path: '/mycenter',
    name: 'mycenter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/1-center/MyCenter.vue')
  },
  {
    path: '/myox',
    name: 'myox',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/2-ox/myOx.vue')
  },
  {
    path: '/mypasture',
    name:'mypasture',
    component: MyPasture
  },
  // {
  //   path: '/divide',
  //   component: Witht
  // },
  {
    path: '/TMR',
    component: TMR
  },
  {
    path: '/myweight',
    component: Weight
  },
  {
    path: '/AES',
    component: AES
  },
  {
    path: '/village',
    component: village
  },
  {
    path: '/three',
    component: three
  },
  {
    path: '/trace',
    component: Trace
  },
  {
    path: '/monitor',
    name: 'monitor',
    component: Monitor
  },
  {
    path: '/bigmap',
    name: 'bigmap',
    component: bigmap2
  },
  {
    path: '/bigmap3',
    name: 'bigmap3',
    component: bigmap3
  },
  {
    path: '/weather',
    component: Weather
  },
  // {
  //   path:'/mypasture',
  //   component:myPasture
  // }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
