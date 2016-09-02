import $ from 'jquery';
import imgUtil from './../../util/imgUtil'
import messageUtil from './../../util/messageUtil'
export default{
  upload: function (name, dom, vm) {
    /* eslint-disable */
    imgUtil.renderImg(dom.files[0],$('#' + name)[0]);
    var formData = new FormData();
    formData.append('name', dom.files[0]);
    $.ajax({
      url: '/api/upload',
      type: 'POST',
      cache: false,
      data: formData,
      processData: false,
      contentType: false
    }).done(function (res) {
      vm.$store.dispatch('EDITORBANNER_CHANGEDATA', name, res.data.url);
    }).fail(function (res) {
      alert('图片上传失败');
    });
  },
  change: function (name, value, vm) {
    vm.$store.dispatch('EDITORBANNER_CHANGEDATA', name, value);
  },
  submit: function (name, vm) {
    $.post('./api/addBanner', vm.$store.state.editorBanner.data, function (res) {
      if (res.result === 0) {
        vm.$store.dispatch('EDITORBANNER_CLEARDATA');
        messageUtil({type: 'success', message: '操作成功'});
        setTimeout(function () {
          vm.$router.go({
            path: vm.$router.path,
            query: {
              t: + new Date()
            },
            force: true
          })
        },1500);
      }else{
        messageUtil({type: 'danger', message: '操作失败'});
      }
    });
  }
}
