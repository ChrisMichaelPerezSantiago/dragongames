import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import Vuetify from 'vuetify';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(Vuetify);

require('./assets/styles/index.css');
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
