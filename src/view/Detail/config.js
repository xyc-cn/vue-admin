/**
 * Created by easonxie on 2016/8/29.
 */
export default{
  render: {
    name: function (value) {
      return '<p>姓名:' + value + '</p>'
    },
    img: function (value) {
      return '<img src="' + value + '">';
    },
    imgList: function (value) {
      var tpl = '<p>头像</p>';
      value.forEach(function (v) {
        var dom = '<img class="img-thumbnail" width="100px" src="' + v + '">';
        tpl = tpl + dom;
      });
      return tpl;
    },
    height: function (value) {
      return '<p>身高:' + value + '</p>'
    },
    hobby: function (value) {
      return '<p>爱好:' + value + '</p>'
    },
    home: function (value) {
      return '<p>籍贯:' + value + '</p>'
    },
    birthday: function (value) {
      return '<p>生日:' + value + '</p>'
    },
    sex: function (value) {
      return '<p>性别:' + value + '</p>'
    },
    age: function (value) {
      return '<p>年龄:' + value + '</p>'
    },
    status: function (value) {
      if (value === 0) {
        return '状态: 未审核'
      } else if (value === 1) {
        return '状态: 已审核'
      } else if (value === 2) {
        return '状态: 已屏蔽'
      }
    }
  }
}
