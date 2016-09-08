/**
 * Created by easonxie on 2016/8/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
Vue.use(Vuex);

const state = $.extend({}, ListConfig.state);

const mutations = $.extend({}, ListConfig.motations);

export default new Vuex.Store({
  state,
  mutations
})
