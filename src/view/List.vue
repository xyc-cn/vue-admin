<template>
  <v_nav></v_nav>
  <div id="app">
    <div class="panel panel-default">
      <div class="panel-body">
        <v_form_inline :components="form.components[1]"></v_form_inline>
        <v_form_inline :components="form.components[0]"></v_form_inline>
        <v_table :th="table.th" :list="list" :operation="table.operation" :multitype="table.multiType"></v_table>
        <v_pagintion :url="'#!/list/'" :total="10" :current="current"></v_pagintion>
      </div>
    </div>
  </div>
</template>

<script>
  import Input from './../components/Input'
  import formInline from './../components/formInline'
  import table from './../components/table'
  import Nav from './../components/Nav'
  import Button from './../components/button'
  import Pagintion from './../components/Pagintion'
  import config from './../project/index'
  import { fetchListData } from '../vuex/actions'
  import { getListData, getParams, getCurrentPage } from '../vuex/getters'

  export default {
    data () {
      return {
        list: [],
        table: config.table,
        form: config.form
      }
    },
    components: {
      v_input: Input,
      v_form_inline: formInline,
      v_table: table,
      v_button: Button,
      v_nav: Nav,
      v_pagintion: Pagintion
    },
    watch: {
      listData: function () {
        this.list = this.listData
      },
      params: function () {
        this.fetchListData(1);
      }
    },
    route: {
      data: function (transition) {
        var page = this.$route.params.page ? this.$route.params.page : 1; // 改变currentPage触发数据刷新
        this.fetchListData(page);
        transition.next({})
      }
    },
    vuex: {
      getters: {
        params: getParams,
        listData: getListData,
        current: getCurrentPage
      },
      actions: {
        fetchListData: fetchListData
      }
    },
    ready: function () {
      this.list = this.listData
    }
  }
</script>
<style>
  #app {
    margin-top: 10px;
    padding: 10px;
  }
  html {
    background-color: #f5f7fa;
  }

  body {
    background-color: transparent !important;
  }
</style>
