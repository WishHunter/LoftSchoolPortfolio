import Vue from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import $axios from './requests';

store.$axios = $axios

sessionStorage.setItem("url_post", "https://webdev-api.loftschool.com/");

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});
