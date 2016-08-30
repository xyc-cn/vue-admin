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
      <template v-for="(index, data) in list">
        <tr>
          <td>{{index+1}}</td>
          <template v-for="td in data">
            <template v-if="key.indexOf($key)>=0">
              <td v-if="$key == multitype.img.key"><img v-bind:src="td" width="100px" class="img-thumbnail"/></td>
              <template v-else>
                <td v-if="$key == multitype.imgList.key"><img v-for="url in td" v-bind:src="url" width="100px" class="img-thumbnail"/></td>
                <td v-else>{{render[$key] ? render[$key](td) :td}}</td>
              </template>
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
    beforeCompile: function () {
      this.th.unshift('序号');
    },
    props: ['th', 'list', 'operation', 'multitype', 'key', 'render'],
    data () {
      return {
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
