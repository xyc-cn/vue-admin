import $ from 'jquery';
import messageUtil from './../../util/messageUtil'
export default{
  fetchBannerListData: function (page, vm) {
    $.post('./api/bannerList', {page: page}, function (res) {
      if (res.result === 0) {
        vm.bannerList = res.list;
      } else {
        messageUtil({type: 'danger', message: '获取banner列表失败'});
      }
    });
  }
}
