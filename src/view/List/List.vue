<template>
  <v_nav></v_nav>
  <div id="app">
    <div class="panel panel-default">
      <div class="panel-body">
        <v_form_inline v-for="item in form":components="item"></v_form_inline>
        <v_table :th="table.th" :list="list" :operation="table.operation" :multitype="table.multiType" :key="table.key" :render="table.render"></v_table>
        <div id="v_pagintion">
        <v_pagintion :url="'#!/list/'" :total="total" :current="current"></v_pagintion>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import Input from '../../components/Input'
  import formInline from '../../components/formInline'
  import table from '../../components/table'
  import Nav from '../../components/Nav'
  import Button from '../../components/button'
  import Pagintion from '../../components/Pagintion'
  import config from './config'
  import { fetchListData, setCurrentPage } from '../../vuex/actions'
  import { getListData, getParams, getCurrentPage, getTotal } from '../../vuex/getters'

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
      params: function () { // 搜索或者过滤按钮按了后，params参数会被设置
        this.fetchListData(1);
      }
    },
    beforeCompile: function () {
      var page = this.$route.params.page ? this.$route.params.page : 1;
      this.setCurrentPage(page);
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
        total: getTotal,
        listData: getListData,
        current: getCurrentPage
      },
      actions: {
        fetchListData: fetchListData,
        setCurrentPage: setCurrentPage
      }
    },
    ready: function () {
      this.list = this.listData;
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
