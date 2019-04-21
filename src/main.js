import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import Paginate from 'vuejs-paginate';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'


Vue.config.productionTip = false;

Vue.use(VueMaterial);

require('./assets/styles/index.css');

Vue.component('paginate' , Paginate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
