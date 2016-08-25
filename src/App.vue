<template>
  <nav id="bs-navbar" class="collapse navbar-collapse">
    <ul class="nav navbar-nav">
      <li>
        <a href="#">审批系统</a>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#" >登录</a></li>
    </ul>
  </nav>
  <div id="app">
    <div class="panel panel-default">
      <div class="panel-body">
        <v_form_inline :components="form.components[1]"></v_form_inline>
        <v_form_inline :components="form.components[0]"></v_form_inline>
        <v_table :th="table.th" :list="table.list" :operation="table.operation" :multitype="table.multiType"></v_table>      </div>
    </div>

  </div>
</template>

<script>
import Input from './components/Input'
import formInline from './components/formInline'
import table from './components/table'
import Button from './components/button'
import config from './project/index'
/* import { incrementCounter } from './vuex/actions'
import { getCount } from './vuex/getters'*/
export default {
  data () {
    return {
      table: config.table,
      form: config.form
    }
  },
  components: {
    v_input: Input,
    v_form_inline: formInline,
    v_table: table,
    v_button: Button
  }
}
</script>
<style>
  #app{
    margin-top:10px;
    padding: 10px;
  }
  html {
    background-color: #f5f7fa;
  }
  body {
    background-color: transparent !important;
  }
  #bs-navbar{
    background-color: white;
  }
</style>
