<template>
  <div class="panel_main">
    <div class="panel panel-default">
      <div class="panel-body">
        <template v-for="item in bannerList">
          <div class="panel-body" style="border-bottom:#eee solid 3px">
              <template v-for="value in item" v-if="config.render&&config.render[$key]">
                {{{config.render[$key](value)}}}
              </template>
              <br>
              <v_button text="上线" type="primary" :callback="handle.pass" :data="item"></v_button>
              <v_button text="下线" type="warning" :callback="handle.ban" :data="item"></v_button>
              <v_button text="删除" type="danger" :callback="handle.del" :data="{item:item,bannerList:bannerList}"></v_button>
          </div>
        </template>
        <v_pagintion :url="url" :total="total" :current="current"></v_pagintion>
      </div>
    </div>
  </div>
</template>
<script>
  import config from './config'
  import handle from './handle'
  import button from './../../components/button'
  import Pagintion from '../../components/Pagintion'

  export default{
    data () {
      return {
        config: config,
        bannerList: [],
        handle: handle,
        url: config.url,
        total: 1,
        current: 1
      }
    },
    route: {
      data: function (transition) {
        this.current = this.$route.params.page ? this.$route.params.page : 1;
        handle.fetchBannerListData(this.current, this);
        transition.next({})
      }
    },
    components: {
      v_button: button,
      v_pagintion: Pagintion
    }
  }
</script>
<style>
.detail_wrap{
  margin-bottom:5px;
}
</style>
