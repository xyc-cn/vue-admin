<template>
  <div id="app">
    <v_input :placeholder="input.placeholder" :type="input.type" :value="5555" :desc="input.desc"></v_input>
    <v_form_inline :components="components"></v_form_inline>
    <v_table :th="th" :list="list" :operation="operation"></v_table>
  </div>
</template>

<script>
import Input from './components/Input'
import formInline from './components/formInline'
import table from './components/table'

export default {
  data () {
    return {
      input: {
        placeholder: '我爱你',
        desc: '昵称',
        type: 'text'
      },
      th: ['id', '用户名', '性别', '年龄', '生日', '爱好', '身高', '籍贯', '操作'],
      list: [{id: 1, name: '小结结', sex: '男', age: '12', birthday: '2016-12-10', hobby: '打球', height: '172cm', home: '广东'},
        {id: 1, name: '小结结', sex: '男', age: '12', birthday: '2016-12-10', hobby: '打球', height: '172cm', home: '广东'}],
      operation: [{type: 'danger', text: '删除'}, {type: 'success', text: '通过'}, {type: 'warning', text: '下架'}],
      components: [
        {
          componentType: 'input',
          placeholder: '我爱你',
          desc: '昵称',
          type: 'text'
        },
        {
          componentType: 'checkBox',
          value: true,
          label: '加精',
          name: 'isStar'
        },
        {
          componentType: 'select',
          value: 1,
          label: '多选',
          name: 'isStar',
          options: [{text: '男神', value: 1}, {text: '女神', value: 2}]
        }
      ]

    }
  },
  components: {
    v_input: Input,
    v_form_inline: formInline,
    v_table: table
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
