<template>
      <button type="button" v-bind:class="[btn,buttonType]" @click="clickButton">{{text}}</button>
</template>
<script>
  export default{
    props: ['text', 'callback', 'type', 'data'],
    data () {
      return {
        btn: 'btn',
        buttonType: ''
      }
    },
    computed: {
      buttonType: function () {
        return 'btn-' + this.type
      }
    },
    components: {},
    methods: {
      clickButton: function () {
        this.callback && this.callback.apply(null, [this.data]);
      }
    }
  }
</script>
<style>
.btn{
  margin: 2px;
}
</style>
