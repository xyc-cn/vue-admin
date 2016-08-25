<template>
  <div class="checkbox">
    <label>
      <input type="checkbox" v-model="value" name="{{name}}" @change="update"> {{label}}
    </label>
  </div>
</template>
<script>
  import { changeSubmit } from '../vuex/actions'
  export default{
    props: ['value', 'name', 'label'],
    data () {
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      update: function (e) {
        this.changeSubmit(this.name, e.target.checked);
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
