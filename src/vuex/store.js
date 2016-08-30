/**
 * Created by Administrator on 2016/8/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  // 表单数据
  submit: {},
  // 列表展示元数据
  list: [],
  // 提交的参数
  params: {},
  // 分页页码
  currentPage: 1,
  total: 0
};

const mutations = {
  CHANGESUBMIT (state, key, value) {
    state.submit[key] = value;
  },
  FETCHELISTDATA (state, list) {
    state.list = list;
  },
  SEARCH (state) {
    state.page = 1;
    var params = {search: state.submit.search};
    state.params = params;
  },
  FILTER (state) {
    var params = JSON.parse(JSON.stringify(state.submit));
    delete params.search;
    params.page = 1;
    state.params = params;
  },
  CHANGETOTAL (state, value) {
    state.total = value;
  },
  SETCURRENTPAGE (state, value) {
    state.currentPage = value;
  },
  REFRESH (state) {
    state.params = {};
  }
};

export default new Vuex.Store({
  state,
  mutations
})
