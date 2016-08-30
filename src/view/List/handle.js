/* eslint-disable */
import { search, filter, fetchListData, refresh, changeSubmit } from '../../vuex/List/actions'
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
  // 表单数据改变的时候，通过action把数据存储起来
  change: function (name, value, vm) {
    changeSubmit(vm.$store, name, value);
  },
  del: function (data,vm) {
    $.post('./api/del', data, function (res) {
      if(res.result === 0){
        openMessage({type: 'success', message: '删除成功'});
        setTimeout(function () {
          fetchListData(vm.$store);
        },1000)
      }else{
        openMessage({type: 'danger', message: '删除失败'});
      }
    })
  },
  pass: function (data, vm) {
    $.post('./api/pass', data, function (res) {
      if(res.result === 0){
        openMessage({type: 'success', message: '通过成功'});
        setTimeout(function () {
          fetchListData(vm.$store);
        },1000)
      }else{
        openMessage({type: 'danger', message: '通过失败'});
      }
    })
  },
  ban: function (data,vm) {
    $.post('./api/ban', data, function (res) {
      if(res.result === 0){
        openMessage({type: 'success', message: '下架成功'});
        setTimeout(function () {
          fetchListData(vm.$store);
        },1000)
      }else{
        openMessage({type: 'danger', message: '下架失败'});
      }
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
    refresh(vm.$store);
    vm.$router.go('/list');
  }
}
