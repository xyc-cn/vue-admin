<template>
  <div class="panel_main">
    <div class="panel panel-default">
      <div class="panel-body">
        <div v-for="item in data" class="detail_wrap">
          <template v-if="config.render&&config.render[$key]">
            {{{config.render[$key](item)}}}
          </template>
        </div>
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
        data: {}
      }
    },
    route: {
      data: function (transition) {
        var id = this.$route.params.id;
        handle.fetchDetailData(id, this);
        transition.next({})
      }
    }
  }
</script>
<style>
.detail_wrap{
  margin-bottom:5px;
}
</style>
