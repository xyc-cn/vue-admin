<template>
  <div id="app">
    <v_input :placeholder="input.placeholder" :type="input.type" :value="5555" :desc="input.desc"></v_input>
    <v_form_inline :components="components"></v_form_inline>
  </div>
</template>

<script>
import Input from './components/Input'
import formInline from './components/formInline'

export default {
  data () {
    return {
      input: {
        placeholder: '我爱你',
        desc: '昵称',
        type: 'text'
      },
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
    v_form_inline: formInline
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
