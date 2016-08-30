<template>
  <div class="checkbox">
    <label>
      <input type="checkbox" v-model="value" name="{{name}}" @change="updateData"> {{label}}
    </label>
  </div>
</template>
<script>
  export default{
    props: ['value', 'name', 'label', 'callback'],
    data () {
      return {
      }
    },
    methods: {
      updateData: function (e) {
        this.callback && this.callback.apply(null, [this.name, this.value, this]);
      }
    },
    components: {}
  }
</script>
