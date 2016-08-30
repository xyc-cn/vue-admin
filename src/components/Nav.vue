<template>
  <nav class="collapse navbar-collapse">
    <ul class="nav navbar-nav">
      <li v-for="item in left">
        <a href="{{item.url}}">{{item.name}}</a>
      </li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li v-for="item in right">
        <a href="{{item.url}}">{{item.name}}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default{
    data () {
      return {
        left: [{name: '审批系统', url: '/#!/list'}],
        right: [{name: '登录', url: '/#!/login'}]
      }
    },
    components: {},
    methods: {
    },
    vuex: {
      actions: {
      }
    }
  }
</script>
<style>
  .navbar-collapse{
    background-color: white;
  }
</style>
