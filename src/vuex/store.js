/**
 * Created by Administrator on 2016/8/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // 表单数据
  submit: {},
  // 列表展示元数据
  list: [],
  params: {}
};

const mutations = {
  CHANGESUBMIT (state, key, value) {
    state.submit[key] = value;
  },
  FETCHELISTDATA (state, list) {
    console.log(222);
    state.list = list;
  },
  SEARCH (state, value) {
    state.params = {};
    state.params.search = state.submit.search;
    console.log(state.params);
  },
  FILTER (state, value) {
    state.params = value;
    state.params.search = null;
  }
};

export default new Vuex.Store({
  state,
  mutations
})
