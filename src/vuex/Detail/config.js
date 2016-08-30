/**
 * Created by Administrator on 2016/8/30.
 */
export default{
  state: {
    detail: {
      data: {}
    }
  },
  motations: {
    DETAIL_CHANGEDATA (state, value) {
      state.detail.data = value;
    }
  }
}
