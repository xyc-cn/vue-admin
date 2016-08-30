/**
 * Created by Administrator on 2016/8/30.
 */
export default{
  state: {
    list: {
      // 表单数据
      submit: {},
      // 列表展示元数据
      list: [],
      // 提交的参数
      params: {},
      // 分页页码
      currentPage: 1,
      // 全部页数
      total: 0
    }
  },
  motations: {
    LIST_CHANGESUBMIT (state, key, value) {
      state.list.submit[key] = value;
    },
    LIST_FETCHELISTDATA (state, list) {
      state.list.list = list;
    },
    LIST_SEARCH (state) {
      state.list.currentPage = 1;
      var params = {search: state.list.submit.search};
      state.list.params = params;
    },
    LIST_FILTER (state) {
      var params = JSON.parse(JSON.stringify(state.list.submit));
      delete params.search;
      params.page = 1;
      state.list.params = params;
    },
    LIST_CHANGETOTAL (state, value) {
      state.list.total = value;
    },
    LIST_SETCURRENTPAGE (state, value) {
      state.list.currentPage = value;
    },
    LIST_REFRESH (state) {
      state.list.params = {};
    }
  }
}
