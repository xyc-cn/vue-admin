<template>
  <div class="panel_main">
    <div class="panel panel-default">
      <div class="panel-body">
        <template v-for="item in bannerList">
          <h2>标题: {{item.title}}</h2>
          <img v-bind:src="item.bgImg" class="img-thumbnail" width="100px">
          <h2>链接: {{item.title}}</h2>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
  import config from './config'
  import handle from './handle'

  export default{
    data () {
      return {
        config: config,
        bannerList: []
      }
    },
    route: {
      data: function (transition) {
        handle.fetchBannerListData(1, this);
        transition.next({})
      }
    },
    watch: {
      bannerList: function () {
        console.log(333);
      }
    },
    ready: function () {
      console.log(this.bannerList);
    }
  }
</script>
<style>
.detail_wrap{
  margin-bottom:5px;
}
</style>
