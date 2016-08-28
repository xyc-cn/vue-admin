<template>
  <div id="v_paginator"></div>
</template>
<style>
  #v_paginator{
    display: block;
    text-align: center;
  }
</style>
<script>
  import '../assets/js/lib/bootstrap-paginator.min.js';
  export default{
    props: ['current', 'total', 'url'],
    data () {
      return {
      }
    },
    components: {},
    methods: {
      setPaginator: function () {
        var currentPage = this.$route.params.page ? this.$route.params.page : this.current ? this.current : 1;
        var url = this.url;
        var options = {
          currentPage: currentPage,
          totalPages: this.total,
          pageUrl: function (type, clickedPage, current) {
            /* eslint-disable */
            switch (type) {
              case "first":
                return url + clickedPage;
              case "prev":
                return url + (current - 1);
              case "next":
                return url + (current + 1);
              case "last":
                return url + clickedPage;
              case "page":
                return url + clickedPage;
            }
          }
        };
        /* eslint-disable */
        $('#v_paginator').bootstrapPaginator(options);
      }
    },
    watch: {
      total: "setPaginator",
      current: "setPaginator"
    },
    ready: function () {
      this.setPaginator();
    }
  }
</script>
