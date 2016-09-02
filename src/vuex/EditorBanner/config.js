/**
 * Created by Administrator on 2016/8/30.
 */
export default{
  state: {
    editorBanner: {
      data: {}
    }
  },
  motations: {
    EDITORBANNER_CHANGEDATA (state, key, value) {
      state.editorBanner.data[key] = value;
    },
    EDITORBANNER_CLEARDATA (state) {
      state.editorBanner.data = {};
    }
  }
}
