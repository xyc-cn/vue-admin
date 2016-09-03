/**
 * Created by easonxie on 2016/8/29.
 */
export default{
  url: '#!/bannerList/',
  render: {
    url: function (value) {
      return '<p>链接:' + value + '</p>'
    },
    bgImg: function (value) {
      return '<img src="' + value + '" width="500px;" style="margin-bottom:10px;">';
    },
    imgList: function (value) {
      var tpl = '<p>头像</p>';
      value.forEach(function (v) {
        var dom = '<img class="img-thumbnail" width="100px" src="' + v + '">';
        tpl = tpl + dom;
      });
      return tpl;
    },
    title: function (value) {
      return '<p>标题:' + value + '</p>'
    },
    status: function (value) {
      if (value === 0) {
        return '状态: 未上线'
      } else if (value === 1) {
        return '状态: 已上线'
      }
    }
  }
}
