/* tslint:disable */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import SuiVue from 'semantic-ui-vue';
import '../semantic/dist/semantic.min.css';
import VueGeolocation from 'vue-browser-geolocation';
import store from './store';
import moment from 'moment';
import VueMoment from 'vue-moment'
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueGeolocation);
Vue.use(SuiVue);
Vue.use(VueMoment, {
  moment
})

// @ts-ignore
new Vue({
  router,
  store,
  render: (h) => h(App),
).$mount('#app');
