import $ from 'jquery'
// 改变筛选内容
export const changeSubmit = function ({ dispatch }, key, value) {
  dispatch('CHANGESUBMIT', key, value);
};
// 获取服务器数据
export const fetchListData = function ({ dispatch, state }, page) {
  var param = JSON.parse(JSON.stringify(state.params));
  param.page = page;
  $.post('./api/list', param, function (res) {
    if (res.result === 0) {
      dispatch('FETCHELISTDATA', res.list);
    }
  });
};
export const search = function ({ dispatch }) {
  dispatch('SEARCH');
};
export const filter = function ({ dispatch }) {
  dispatch('FILTER');
};
