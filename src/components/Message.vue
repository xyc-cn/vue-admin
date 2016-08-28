<template>
  <div class="alert {{className}} alert-dismissible bt-alert" role="alert" v-bind:style="styledata">
    <button type="button" class="close" @click="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>{{message}}!</strong>
  </div>
</template>
<script>
  export default{
    props: ['message', 'type', 'closeDelay'],
    data () {
      return {
        className: 'alert-' + this.type,
        styledata: {}
      }
    },
    components: {},
    methods: {
      close: function () {
        this.$remove();
      }
    },
    compiled () {
      this.$nextTick(function () {
        this.$appendTo(document.body)
      })
    },
    beforeCompile: function () {
      this.styledata.top = (document.body.scrollTop + 300) + 'px';
    },
    ready: function () {
      var self = this;
      var time = this.closeDelay ? this.closeDelay : 2000;
      setTimeout(function () {
        self.$remove();
      }, time)
    }
  }
</script>
<style>
  .bt-alert{
    position: absolute;
    top: 200px;
    width: 300px;
    left:50%;
    margin-left: -150px;
  }
</style>
