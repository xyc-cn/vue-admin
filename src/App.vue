<!-- 全局样式 -->
<template>
  <v_nav :left="left" :right="right"></v_nav>
  <router-view></router-view>
</template>

<script>
  import Nav from './components/Nav'
  export default {
    data: function () {
      return {
        left: [{name: '审批管理', url: '/#!/list'}, {
          name: '轮播管理',
          list: [{name: '查看轮播', url: '/#!/bannerList'}, {name: '新增轮播', url: '/#!/addBanner'}]
        }],
        right: [{name: '登录', url: '/#!/login'}]
      }
    },
    components: {
      v_nav: Nav
    },
    ready () {
    }
  }
</script>
