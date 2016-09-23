/* eslint-disable */
import messageUtil from './../../util/messageUtil'
import pathUtil from './../../util/path'
export default (function () {
  const fetchData = function (data, vm) {
    $.post('./api/list', data, function (res) {
      if (res.result === 0) {
        vm.$dispatch('refresh', res.list, res.total, data.page)
      }
    });
  };
  return {
    del: function (data, vm) {
      $.post('./api/del', data.data, function (res) {
        if (res.result === 0) {
          messageUtil({type: 'success', message: '删除成功'});
          setTimeout(function () {
            var index = data.list.indexOf(data.data);
            data.list.splice(index, 1);
          }, 1500);
        } else {
          messageUtil({type: 'danger', message: '删除失败'});
        }
      })
    },
    pass: function (data, vm) {
      $.post('./api/pass', data.data, function (res) {
        if (res.result === 0) {
          messageUtil({type: 'success', message: '通过成功'});
          data.data.status = 1;
        } else {
          messageUtil({type: 'danger', message: '通过失败'});
        }
      })
    },
    ban: function (data, vm) {
      $.post('./api/ban', data.data, function (res) {
        if (res.result === 0) {
          messageUtil({type: 'success', message: '下架成功'});
          data.data.status = 0;
        } else {
          messageUtil({type: 'danger', message: '下架失败'});
        }
      });
    },
    detail: function (data, vm) {
      vm.$router.go('/detail/' + data.data.id);
    },
    search: function (data, vm) {
      vm.$dispatch('reset', {search: data.search});
      fetchData({search: data.search}, vm)
    },
    filter: function (data, vm) {
      delete data.search;
      vm.$dispatch('reset', data);
      vm.$router.go('/list?' + (+ new Date()));
    },
    refresh: function (data, vm) {
      vm.params = {};
      vm.$dispatch('reset');
      vm.$router.go('/list?'+ (+ new Date()));
    },
    fetchData: function (data, vm) {
      fetchData(data, vm)
    }
  }
})()
