import Vue from 'vue';
import Router from 'vue-router';
import home from '@/pages/Home';
import login from '@/pages/Login';
import register from '@/pages/Register';
import detail from '@/pages/Detail';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    }
    ,
    {
      path:'/login',
      name:'Login',
      component: login
    },
    {
      path:'/register',
      name:'Register',
      component: register
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:detail,
      
    }
    
  ]
})
