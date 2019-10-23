import Vue from 'vue';
import Router from 'vue-router';
import Axios from 'axios';

import Index from './views/Index.vue';
import Students from './views/Students.vue';
import Login from './views/Login.vue';
import Recoverpw from './views/Recoverpw.vue';
 
Vue.prototype.$http = Axios;
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/students',
      name: 'students',
      component: Students
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/recover',
      name: 'recoverpw',
      component: Recoverpw
    }
  ]
});
