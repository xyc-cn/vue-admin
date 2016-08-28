/* eslint-disable */
import { search, filter, fetchListData } from '../../vuex/actions'
import Vue from 'vue'
import Message from '../../components/Message'
const MessageComponent = Vue.extend(Message);
const openMessage = (propsData = {}) => {
  return new MessageComponent({
    el: document.createElement('div'),
    propsData
  })
};
export default{
  del: function (data,vm) {
    $.post('./api/del', data, function (res) {
      openMessage({type: 'success', message: '删除成功'});
      setTimeout(function () {
        fetchListData(vm.$store);
      },1000)
    })
  },
  pass: function (data, vm) {
    $.post('./api/pass', function (res) {
      console.log(res);
      fetchListData(vm.$store)
    })
  },
  ban: function (data,vm) {
    $.post('./api/ban', function (res) {
      console.log(res);
      fetchListData(vm.$store)
    });
  },
  detail: function (data, vm) {
    vm.$router.go('/detail/' + data.id);
  },
  search: function (data, vm) {
    search(vm.$store);
    vm.$router.go('/list');
  },
  filter: function (data, vm) {
    filter(vm.$store);
    vm.$router.go('/list');
  },
  refresh: function (data, vm) {
    vm.$router.go('/list');
  }
}
