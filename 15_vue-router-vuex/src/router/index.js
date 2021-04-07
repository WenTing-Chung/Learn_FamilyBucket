import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/routertest',
    name: 'RouterTest',
    component: () => import('@/views/Router/RouterTest.vue'),
    children: [
      {
        path: '/first',
        name: 'RouterFirst',
        component: () => import('@/views/Router/First.vue')
      },
      {
        path: '/second',
        name: 'RouterSecond',
        component: () => import('@/views/Router/Second.vue')
      }
    ]
  },
  {
    path: '/routertype',
    name: 'RouterType',
    component: () => import('@/views/RouterType/RouterType.vue'),
    children: [
      {
        path: '/typequery',
        name: 'TypeQuery',
        component: () => import('@/views/RouterType/TypeQuery.vue')
      },
      {
        path: '/typeparams',
        redirect: '/typeparams/1'
      },
      {
        path: '/typeparams/:iamparams',
        name: 'TypeParams',
        component: () => import('@/views/RouterType/TypeParams.vue')
      }
    ]
  },
  {
    path: '/vuexstart',
    redirect: '/vuexstart/1'
  },
  {
    path: '/vuexstart/:day',
    name: 'VuexStart',
    component: () => import('@/views/Vuex/VuexStart.vue')
  },
  {
    path: '/vuexmodule',
    redirect: '/vuexmodule/1'
  },
  {
    path: '/vuexmodule/:day',
    name: 'VuexModule',
    component: () => import('@/views/Vuex/VuexModule.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
