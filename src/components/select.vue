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
    props: ['options', 'value', 'label', 'name', 'value_type'],
    data () {
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      update: function (e) {
        var value = e.target.value;
        if (this.value_type === 'Number') {
          value = Number(value);
        }
        this.changeSubmit(this.name, value);
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
