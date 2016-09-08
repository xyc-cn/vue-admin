<template>
  <div class="form-inline">
    <template v-if="components" v-for="item in components">
      <v_input :callback="item.callback" :placeholder="item.placeholder" :value.sync="params[item.name]" :type="item.type" :name="item.name" :desc="item.desc" v-if="(item.componentType=='input')"></v_input>
      <v_check_box :callback="item.callback" :name="item.name" :label="item.label" :value.sync="params[item.name]" v-if="(item.componentType=='checkBox')"></v_check_box>
      <v_select :callback="item.callback" :name="item.name":value.sync="params[item.name]" :label="item.label" :options="item.options" v-if="(item.componentType=='select')"></v_select>
      <v_button :text="item.text" :callback="item.callback" :type="item.type" v-if="(item.componentType=='button')" :data.sync="params"></v_button>
      <v_datepicker :placeholder="item.desc" :value.sync="params[item.name]" :name="item.name" :callback="item.callback" v-if="(item.componentType=='datePicker')"></v_datepicker>
    </template>
  </div>
</template>

<script>
  import Input from './Input'
  import Button from './button'
  import Datepicker from './Datepicker/Datepicker'
  import CheckBox from './checkBox'
  import Select from './select'
  export default{
    props: ['components', 'params'],
    data () {
      return {
      }
    },
    components: {
      v_input: Input,
      v_check_box: CheckBox,
      v_select: Select,
      v_button: Button,
      v_datepicker: Datepicker
    }
  }
</script>
<style>
.form-inline{
  margin-bottom:5px;
}
</style>
