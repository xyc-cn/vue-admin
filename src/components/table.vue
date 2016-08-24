<template>
  <table class="table table-bordered">
    <thead>
    <tr>
      <template v-for="item in th">
      <th>{{item}}</th>
      </template>
    </tr>
    </thead>
    <tbody>
      <template v-for="item in list">
        <tr>
        <td v-for="td in item">{{td}}</td>
          <td v-if="operation">
          <template v-for="item in operation">
            <v_button :text="item.text" :type="item.type"></v_button>
          </template>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
<script>
  import button from './button'
  export default{
    props: ['th', 'list', 'operation'],
    data () {
      return {
        type: 'danger',
        callback: function () {
          console.log(2222)
        }
      }
    },
    components: {
      v_button: button
    }
  }
</script>
