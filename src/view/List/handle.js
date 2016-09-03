/* eslint-disable */
import { fetchListData } from '../../vuex/List/actions'
import messageUtil from './../../util/messageUtil'

export default{
  // 表单数据改变的时候，通过action把数据存储起来
  change: function (name, value, vm) {
    vm.$store.dispatch('LIST_CHANGESUBMIT', name, value);
  },
  del: function (data,vm) {
    $.post('./api/del', data.data, function (res) {
      if(res.result === 0){
        messageUtil({type: 'success', message: '删除成功'});
        setTimeout(function () {
          var index = data.list.indexOf(data.data);
          data.list.splice(index, 1);
        },1500);
      }else{
        messageUtil({type: 'danger', message: '删除失败'});
      }
    })
  },
  pass: function (data, vm) {
    $.post('./api/pass', data.data, function (res) {
      if(res.result === 0){
        messageUtil({type: 'success', message: '通过成功'});
        data.data.status = 1;
      }else{
        messageUtil({type: 'danger', message: '通过失败'});
      }
    })
  },
  ban: function (data,vm) {
    $.post('./api/ban', data.data, function (res) {
      if(res.result === 0){
        messageUtil({type: 'success', message: '下架成功'});
        data.data.status = 0;
      }else{
        messageUtil({type: 'danger', message: '下架失败'});
      }
    });
  },
  detail: function (data, vm) {
    vm.$router.go('/detail/' + data.data.id);
  },
  search: function (data, vm) {
    vm.$store.dispatch('LIST_SEARCH');
    vm.$router.go('/list');
  },
  filter: function (data, vm) {
    vm.$store.dispatch('LIST_FILTER');
    vm.$router.go('/list');
  },
  refresh: function (data, vm) {
    vm.$store.dispatch('LIST_REFRESH');
    vm.$router.go('/list');
  }
}
