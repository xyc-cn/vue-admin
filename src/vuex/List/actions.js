import $ from 'jquery'
// 改变筛选内容
export const changeSubmit = function ({ dispatch }, key, value) {
  dispatch('LIST_CHANGESUBMIT', key, value);
};
// 获取服务器数据
export const fetchListData = function ({ dispatch, state }, page) {
  var param = JSON.parse(JSON.stringify(state.list.params));
  /* eslint-disable */
  param.page = page ? page : state.currentPage;
  $.post('./api/list', param, function (res) {
    if (res.result === 0) {
      dispatch('LIST_FETCHELISTDATA', res.list);
      dispatch('LIST_CHANGETOTAL', res.total);
    }
  });
};
export const search = function ({ dispatch }) {
  dispatch('LIST_SEARCH');
};
export const filter = function ({ dispatch }) {
  dispatch('LIST_FILTER');
};
export const setCurrentPage = function ({ dispatch }, value) {
  dispatch('LIST_SETCURRENTPAGE', value);
};
export const refresh = function ({ dispatch }) {
  dispatch('LIST_REFRESH');
};
