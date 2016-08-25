<template>
  <div class="form-group">
    <label>{{label}}</label>
      <select class="form-control" v-model="value" @change="update">
        <template v-for="item in options">
          <option v-bind:value="item.value">{{item.text}}</option>
        </template>
      </select>
  </div>
</template>
<script>
  import { changeSubmit } from '../vuex/actions'
  export default{
    props: ['options', 'value', 'label', 'name'],
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
