<template>
    <div class="form-group">
        <label>{{desc}}</label>
        <input type="{{type}}" class="form-control" placeholder="{{placeholder}}" @input="update" v-model="value">
    </div>
</template>
<script>
  import { changeSubmit } from '../vuex/actions'
  export default{
    props: ['placeholder', 'desc', 'type', 'value', 'name'],
    data () {
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      update: function (e) {
        this.changeSubmit(this.name, e.target.value);
      }
    },
    components: {},
    vuex: {
      actions: {
        changeSubmit: changeSubmit
      }
    }
  }
</script>
