<template>
  <form class="form-inline">
    <template v-if="components" v-for="item in components">
      <v_input :placeholder="item.placeholder" :type="item.type" :value="5555" :desc="item.desc" v-if="(item.componentType=='input')"></v_input>
      <v_check_box :name="item.name" :label="item.label" :value="item.value" v-if="(item.componentType=='checkBox')"></v_check_box>
      <v_select :name="item.name" :label="item.label" :options="item.options" :value="item.value" v-if="(item.componentType=='select')"></v_select>

    </template>
  </form>
</template>

<script>
  import Input from './Input'
  import CheckBox from './checkBox'
  import Select from './select'
  export default{
    props: ['components'],
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {
      v_input: Input,
      v_check_box: CheckBox,
      v_select: Select
    }
  }
</script>
