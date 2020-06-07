import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./components/home.vue')
// import Home from './components/home.vue'
// const Shopp = () => import('./components/shopp.vue')

Vue.use(Router)
// const Myarea = () => import('../components/area/myarea.vue')

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    //   children: [
    //     {path: '/myarea', component: Myarea}
    //   ]

    }

  ]
})
