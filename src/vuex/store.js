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
  params: {},
  currentPage: 1
};

const mutations = {
  CHANGESUBMIT (state, key, value) {
    state.submit[key] = value;
  },
  FETCHELISTDATA (state, list) {
    state.list = list;
  },
  SEARCH (state, value) {
    state.page = 1;
    var params = {search: state.submit.search}
    state.params = params;
  },
  FILTER (state, value) {
    var params = JSON.parse(JSON.stringify(state.submit));
    delete params.search;
    params.page = 1;
    state.params = params;
  }
};

export default new Vuex.Store({
  state,
  mutations
})
