import $ from 'jquery';
import messageUtil from './../../util/messageUtil'
export default{
  fetchDetailData: function (id, vm) {
    $.post('./api/detail', {id: id}, function (res) {
      if (res.result === 0) {
        vm.data = res.data;
      } else {
        messageUtil({type: 'danger', message: '获取详情失败'});
      }
    });
  }
}
