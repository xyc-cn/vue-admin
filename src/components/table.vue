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
      <template v-for="data in list">
        <tr>
          <template v-for="td in data">
            <td v-if="$key == multitype.img.key"><img v-bind:src="td" width="100px" class="img-thumbnail"/></td>
            <template v-else>
              <td v-if="$key == multitype.imgList.key"><img v-for="url in td" v-bind:src="url" width="100px" class="img-thumbnail"/></td>
              <td v-else>{{td}}</td>
            </template>
          </template>
          <td v-if="operation">
          <template v-for="item in operation">
            <v_button :text="item.text" :type="item.type" :callback="item.callback" :data="data"></v_button>
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
    props: ['th', 'list', 'operation', 'multitype'],
    data () {
      return {
        mode: 'danger',
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
<style>
.img-thumbnail{
  margin-right:5px;
}
</style>
