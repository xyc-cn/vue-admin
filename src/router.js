/**
 * Created by xieyicheng on 2016/8/25.
 */
export default (router) => {
  router.map({
    '/list': {
      component: (resolve) => require(['./view/List/List.vue'], resolve)
    },
    '/list/:page': {
      component: (resolve) => require(['./view/List/List.vue'], resolve)
    },
    '/editorForm': {
      component: (resolve) => require(['./view/EditorBanner/EditorBanner.vue'], resolve)
    },
    '/detail/:id': {
      component: (resolve) => require(['./view/Detail/Detail.vue'], resolve)
    },
    '/test': {
      component: (resolve) => require(['./view/List/List.vue'], resolve)
    }
  });
  router.redirect({
    '/': '/list'
  })
}
