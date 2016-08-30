<template>
    <div class="form-group">
        <label>{{desc}}</label>
        <input type="{{type}}" class="form-control" placeholder="{{placeholder}}" @change="update" v-model="value">
    </div>
</template>
<script>
  export default{
    props: ['placeholder', 'desc', 'type', 'value', 'name', 'callback'],
    data () {
      return {
      }
    },
    methods: {
      update: function (e) {
        this.callback && this.callback.apply(null, [this.name, this.value, this]);
      }
    },
    components: {}
  }
</script>
