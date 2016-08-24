<template>
  <div class="form-group">
    <label>{{label}}</label>
      <select class="form-control" v-model="value">
        <template v-for="item in options">
          <option v-bind:value="item.value">{{item.text}}</option>
        </template>
      </select>
  </div>
</template>
<script>
  export default{
    props: ['options', 'value', 'label'],
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
