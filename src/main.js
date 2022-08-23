
import App from './App.vue'
import Vue from 'vue';
import VueMask from 'v-mask';

Vue.use(VueMask);

import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')