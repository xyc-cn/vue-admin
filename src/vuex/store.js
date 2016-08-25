/**
 * Created by Administrator on 2016/8/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // 表单请求参数
  submit: {}
};

const mutations = {
  CHANGESUBMIT (state, key, value) {
    state.submit[key] = value;
    console.log(JSON.stringify(state.submit));
  }
};

export default new Vuex.Store({
  state,
  mutations
})
