 import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Schedule from './views/Schedule.vue'
import Login from './views/Login.vue'
import Results from './views/Results.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, 
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
        path: '/schedule',
        name: 'Schedule',
        component: Schedule 
    },
       {
        path: '/Login',
        name: 'Login',
        component: Login
    },
       {
      path: '/Results',
      name: 'Results',
      component: Results
    }
  ]
})
