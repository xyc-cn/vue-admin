import $ from 'jquery'
// 获取服务器数据
export const fetchDetailData = function ({ dispatch }, id) {
  /* eslint-disable */
  $.post('./api/detail', {id: id}, function (res) {
    if (res.result === 0) {
      dispatch('DETAIL_CHANGEDATA', res.data);
    }
  });
};
