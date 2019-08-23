
import Vue from 'vue';
import App from './pages/App';
import router from './router';
import store from './store/store';
import '../src/assets/css/common.css';


Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
