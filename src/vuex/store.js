/**
 * Created by easonxie on 2016/8/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
import DetailConfig from './Detail/config'
import EditorBannerConfig from './EditorBanner/config'
Vue.use(Vuex);

const state = $.extend({}, DetailConfig.state, EditorBannerConfig.state);

const mutations = $.extend({}, DetailConfig.motations, EditorBannerConfig.motations);

export default new Vuex.Store({
  state,
  mutations
})
