 import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Schedule from './components/Schedule.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      { 
            path: '/schedule',
            name: 'Schedule',
            component: Schedule,
}, 
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
