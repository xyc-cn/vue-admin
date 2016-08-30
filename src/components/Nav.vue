<template>
  <nav class="collapse navbar-collapse">
    <ul class="nav navbar-nav">
      <template v-for="item in left">
      <li class="dropdown" v-if="item.list">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{item.name}}<span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li v-for="i in item.list"><a href="{{i.url}}">{{i.name}}</a></li>
        </ul>
      </li>
        <li v-else>
          <a href="{{item.url}}">{{item.name}}</a>
        </li>
      </template>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <template v-for="item in right">
        <li class="dropdown" v-if="item.list">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{item.name}}<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li v-for="i in item.list"><a href="{{i.url}}">{{i.name}}</a></li>
          </ul>
        </li>
        <li v-else>
          <a href="{{item.url}}">{{item.name}}</a>
        </li>
      </template>
    </ul>
  </nav>
</template>
<script>
  import 'bootstrap'
  export default{
    props: ['left', 'right'],
    data () {
      return {
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
