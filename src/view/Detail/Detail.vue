<template>
  <div class="panel_main">
    <div class="panel panel-default">
      <div class="panel-body">
        <div v-for="item in data" class="detail_wrap">
          <template v-if="config.render&&config.render[$key]">
            {{{config.render[$key](item)}}}
          </template>
          <template v-else>
            {{item}}
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { fetchDetailData } from '../../vuex/Detail/actions'
  import { getDetailData } from '../../vuex/Detail/getters'
  import config from './config'
  export default{
    data () {
      return {
        data: {}
      }
    },
    route: {
      data: function (transition) {
        var id = this.$route.params.id;
        this.fetchDetailData(id);
        transition.next({})
      }
    },
    components: {},
    watch: {
      detailData: function () {
        this.data = this.detailData;
      }
    },
    vuex: {
      getters: {
        detailData: getDetailData
      },
      actions: {
        fetchDetailData: fetchDetailData
      }
    },
    beforeCompile: function () {
      this.config = config;
    },
    ready: function () {
    }
  }
</script>
<style>
.detail_wrap{
  margin-bottom:5px;
}
</style>
