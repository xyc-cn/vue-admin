import Vue from 'vue'
import App from './App'
import store from './vuex/store' // import 我们刚刚创建的 store
import 'bootstrap/dist/css/bootstrap.css';
require('jquery');
/* eslint-disable no-new */
new Vue({
  el: 'body',
  store,
  components: { App }
});
