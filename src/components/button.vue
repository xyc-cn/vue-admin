<template>
      <button type="button" v-bind:class="[btn,buttonType]" @click="clickButton">{{text}}</button>
</template>
<script>
  export default{
    props: ['text', 'callback', 'type'],
    data () {
      return {
        btn: 'btn btn-sm',
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
        this.callback && this.callback.apply();
      }
    }
  }
</script>
<style>
.btn{
  margin: 2px;
}
</style>
