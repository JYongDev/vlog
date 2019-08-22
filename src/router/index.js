import Vue from 'vue';
import Router from 'vue-router';
import home from '@/pages/Home';
import login from '@/pages/Login';
import register from '@/pages/Register';
import detail from '@/pages/Detail';
import listview from '@/components/ListView';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect:'/home/topics/total'
    },
    {
      path :'/home',
      name: 'Home',
      redirect:'/home/topics/total',
      component: home ,
      children:[
        {
          name:'topics',
          path:'topics/:name',
          component:listview
        }
      ]
    } ,
    // ,
    // {
    //   path:'/login',
    //   name:'Login',
    //   component: login
    // }
    // {
    //   path:'/register',
    //   name:'Register',
    //   component: register
    // },
    {
      path:'/detail/:id',
      name:'Detail',
      component:detail,
      
    }
    
  ]
})
