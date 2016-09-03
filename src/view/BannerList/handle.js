import $ from 'jquery';
import messageUtil from './../../util/messageUtil'
export default{
  fetchBannerListData: function (page, vm) {
    $.post('./api/bannerList', {page: page}, function (res) {
      if (res.result === 0) {
        vm.bannerList = res.list;
        vm.total = res.total;
      } else {
        messageUtil({type: 'danger', message: '获取banner列表失败'});
      }
    });
  },
  pass: function (data, vm) {
    $.post('./api/passBanner', data, function (res) {
      if (res.result === 0) {
        messageUtil({type: 'success', message: '通过成功'});
        data.status = 1;
      } else {
        messageUtil({type: 'danger', message: '操作失败'});
      }
    })
  },
  ban: function (data, vm) {
    $.post('./api/banBanner', data, function (res) {
      if (res.result === 0) {
        messageUtil({type: 'success', message: '下架成功'});
        data.status = 0;
      } else {
        messageUtil({type: 'danger', message: '操作失败'});
      }
    })
  },
  del: function (data, vm) {
    $.post('./api/delBanner', data.item, function (res) {
      if (res.result === 0) {
        messageUtil({type: 'success', message: '删除成功'});
        var index = data.bannerList.indexOf(data.item);
        data.bannerList.splice(index, 1);
      } else {
        messageUtil({type: 'danger', message: '操作失败'});
      }
    })
  }
}
