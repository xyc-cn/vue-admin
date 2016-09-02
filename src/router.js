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
    '/editorBanner': {
      component: (resolve) => require(['./view/EditorBanner/EditorBanner.vue'], resolve)
    },
    '/detail/:id': {
      component: (resolve) => require(['./view/Detail/Detail.vue'], resolve)
    },
    '/bannerList': {
      component: (resolve) => require(['./view/BannerList/BannerList.vue'], resolve)
    },
    '/test': {
      component: (resolve) => require(['./view/List/List.vue'], resolve)
    }
  });
  router.redirect({
    '/': '/list'
  })
}
