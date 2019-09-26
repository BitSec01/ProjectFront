import Vue from 'vue';
import Router from 'vue-router';

import Index from './views/Index.vue';
import Tables from './views/Tables.vue';

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
      path: '/tables',
      name: 'tables',
      component: Tables
    }
  ]
});
