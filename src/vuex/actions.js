import $ from 'jquery'
// 改变筛选内容
export const changeSubmit = function ({ dispatch }, key, value) {
  dispatch('CHANGESUBMIT', key, value);
};
// 获取服务器数据
export const fetchListData = function ({ dispatch, state }, page) {
  var param = JSON.parse(JSON.stringify(state.params));
  /* eslint-disable */
  param.page = page ? page : state.currentPage;
  $.post('./api/list', param, function (res) {
    if (res.result === 0) {
      dispatch('FETCHELISTDATA', res.list);
      dispatch('CHANGETOTAL', res.total);
    }
  });
};
export const search = function ({ dispatch }) {
  dispatch('SEARCH');
};setCurrentPage
export const filter = function ({ dispatch }) {
  dispatch('FILTER');
};
export const setCurrentPage = function ({ dispatch }, value) {
  dispatch('SETCURRENTPAGE', value);
};
export const refresh = function ({ dispatch }) {
  dispatch('REFRESH');
};
