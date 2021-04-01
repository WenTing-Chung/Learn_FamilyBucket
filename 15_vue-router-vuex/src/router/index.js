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
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test/Test.vue'),
    children: [
      {
        path: '/testinfo',
        name: 'TestInfo',
        component: () => import('@/views/Test/TestInfo.vue')
      },
      {
        path: '/fgovideo',
        name: 'FGOVideo',
        component: () => import('@/views/Test/FGOVideo.vue')
      }
    ]
  },
  {
    path: '/routertype',
    name: 'RouterType',
    component: () => import('@/views/Type/RouterType.vue'),
    children: [
      {
        path: '/typequery',
        name: 'TypeQuery',
        component: () => import('@/views/Type/TypeQuery.vue')
      },
      {
        path: '/typeparams',
        redirect: '/typeparams/1'
      },
      {
        path: '/typeparams/:iamparams',
        name: 'TypeParams',
        component: () => import('@/views/Type/TypeParams.vue')
      }
    ]
  },
  {
    path: '/vuextest',
    redirect: '/vuextest/1'
  },
  {
    path: '/vuextest/:day',
    name: 'VuexTest',
    component: () => import('@/views/VuexTest.vue')
  },
  {
    path: '/storemodule',
    redirect: '/storemodule/1'
  },
  {
    path: '/storemodule/:day',
    name: 'StoreModule',
    component: () => import('@/views/StoreModule.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
