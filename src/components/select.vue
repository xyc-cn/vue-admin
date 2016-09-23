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
  export default{
    props: ['options', 'value', 'label', 'name', 'callback'],
    data () {
      return {
        msg: 'hello vue'
      }
    },
    methods: {
      update: function (e) {
        this.callback && this.callback.apply(null, [this.name, Number(this.value), this]);
      }
    },
    components: {},
    beforeCompile: function () {
      var legal;
      var self = this;
      this.options && this.options.forEach && this.options.forEach(function (v) {
        if (self.value === v.value) {
          legal = true;
        }
      });
      if (!legal) {
        this.value = this.options[0].value;
      }
      console.log();
    }
  }
</script>
