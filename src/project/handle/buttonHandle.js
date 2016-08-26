/* eslint-disable */
import { search, fetchListData } from '../../vuex/actions'

export default{
  del: function (data,vm) {
    $.post('./api/del', data, function (res) {
      console.log(res);
    })
  },
  pass: function () {
    $.post('./api/pass', function (res) {
      console.log(res);
    })
  },
  ban: function (data,vm) {
    $.post('./api/ban', function (res) {
      console.log(res);
    });
  },
  detail: function (data, vm) {
    vm.$router.go('/detail/' + data.id);
  },
  search: function (data, vm) {
    search(vm.$store);
    fetchListData(vm.$store ,1)
  }
}
