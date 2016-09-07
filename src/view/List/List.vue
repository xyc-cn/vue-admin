<template>
  <div class="panel_main">
    <div class="panel panel-default">
      <div class="panel-body">
        <v_form_inline v-for="item in form":components="item" :params="params"></v_form_inline>
        <v_table :th="table.th" :list="list" :operation="table.operation"  :key="table.key" :render="table.render"></v_table>
        <v_pagintion :url="url" :total="total" :current="current"></v_pagintion>
      </div>
    </div>
  </div>
</template>

<script>
  import formInline from '../../components/formInline'
  import table from '../../components/table'
  import Pagintion from '../../components/Pagintion'
  import config from './config'
  import handle from './handle'
  export default {
    data () {
      return {
        list: [],
        url: config.url,
        table: config.table,
        form: config.form,
        params: {},
        total: 1,
        current: 1
      }
    },
    components: {
      v_form_inline: formInline,
      v_table: table,
      v_pagintion: Pagintion
    },
    route: {
      data: function (transition) {
        var page = this.$route.params.page ? this.$route.params.page : 1;
        this.params.page = page;
        handle.fetchData(this.params, this);
        transition.next({})
      }
    },
    events: {
      'refresh': function (list, total) {
        this.list = list;
        this.total = total;
        this.current = 1;
      }
    }
  }
</script>

