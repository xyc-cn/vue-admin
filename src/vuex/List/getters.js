/**
 * Created by easonxie on 2016/8/25.
 */
export function getParams (state) {
  return state.list.params
}
export function getListData (state) {
  return state.list.list
}
export function getCurrentPage (state) {
  return state.list.currentPage
}
export function getTotal (state) {
  return state.list.total
}
