import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const RouterMap = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/Helloworld'),
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: RouterMap,
})

export default router
