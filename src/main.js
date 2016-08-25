import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import store from './vuex/store'
import routerConfig from './router'
import { sync } from 'vuex-router-sync'
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(VueRouter);
require('jquery');
var router = new VueRouter();
routerConfig(router);
// start app
sync(store, router);
App.store = store;
router.start(App, 'app');
