import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/main.scss';

// messages
import messages from './lang';

Vue.config.productionTip = false;
Vue.use(VueI18n);

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app');
