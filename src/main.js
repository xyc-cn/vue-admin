import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import store from './vuex/store'
import routerConfig from './router'
import { sync } from 'vuex-router-sync'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/main.css';

Vue.use(VueRouter);
var router = new VueRouter();
routerConfig(router);

App.store = store;
sync(store, router);
router.start(App, 'app');
