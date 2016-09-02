import $ from 'jquery'
// 获取服务器数据
export const fetchListData = function ({ dispatch, state }, page) {
  var param = JSON.parse(JSON.stringify(state.list.params));
  /* eslint-disable */
  param.page = page ? page : state.list.currentPage;
  $.post('./api/list', param, function (res) {
    if (res.result === 0) {
      dispatch('LIST_FETCHELISTDATA', res.list);
      dispatch('LIST_CHANGETOTAL', res.total);
    }
  });
};
export const setCurrentPage = function ({ dispatch }, value) {
  dispatch('LIST_SETCURRENTPAGE', value);
};
