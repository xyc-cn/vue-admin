/**
 * Created by xieyicheng on 2016/8/25.
 */
export default (router) => {
  router.map({
    '/list': {
      component: (resolve) => require(['./view/List.vue'], resolve)
    },
    '/detail': {
      component: (resolve) => require(['./view/Detail.vue'], resolve)
    }
  });
  router.redirect({
    '/': '/list'
  })
}
