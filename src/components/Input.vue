<template>
    <div class="form-group">
        <label>{{desc}}</label>
        <input type="{{type}}" class="form-control" placeholder="{{placeholder}}" v-model="value">
    </div>
</template>
<script>
  export default{
    props: ['placeholder', 'desc', 'type', 'value'],
    data () {
      return {
//        value: '',
        msg: 'hello vue'
      }
    },
    components: {},
    ready: function () {
      console.log(this.placeholder);
    }
  }
</script>
