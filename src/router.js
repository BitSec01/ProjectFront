import Vue from 'vue';
import Router from 'vue-router';
import Axios from 'axios';

import Index from './views/Index.vue';
import Students from './views/Students.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Recoverpw from './views/Recoverpw.vue';

import StudentMap from './views/StudentMap.vue';
import Companies from './views/Companies.vue';
import CompanyMap from './views/CompanyMap.vue';
import Contacts from './views/Contacts.vue';
 
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
      name: 'Students',
      component: Students
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/recover',
      name: 'recoverpw',
      component: Recoverpw
    },
    {
      path: '/students-map',
      name: 'Students Map',
      component: StudentMap
    },
    {
      path: '/companies',
      name: 'Bedrijven Lijst',
      component: Companies
    },
    {
      path: '/companies-map',
      name: 'Bedrijven Kaart',
      component: CompanyMap
    },
    {
      path: '/contacts',
      name: 'Contacten Lijst',
      component: Contacts
    }
  ]
});
