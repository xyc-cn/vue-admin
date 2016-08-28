/**
 * Created by xieyicheng on 2016/8/25.
 */
export default (router) => {
  router.map({
    '/list': {
      component: (resolve) => require(['./view/List.vue'], resolve)
    },
    '/list/:page': {
      component: (resolve) => require(['./view/List.vue'], resolve)
    },
    '/editorForm': {
      component: (resolve) => require(['./view/EditorForm.vue'], resolve)
    },
    '/detail/:id': {
      component: (resolve) => require(['./view/Detail.vue'], resolve)
    }
  });
  router.redirect({
    '/': '/list'
  })
}
