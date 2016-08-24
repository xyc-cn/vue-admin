<template>
  <div class="checkbox">
    <label>
      <input type="checkbox" v-model="value" name="{{name}}"> {{label}}
    </label>
  </div>
</template>
<script>
  export default{
    props: ['value', 'name', 'label'],
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
