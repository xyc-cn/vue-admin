/**
 * Created by Administrator on 2016/9/8.
 */
export default{
  buildPath: function (obj) {
    obj = obj || {};
    var str = '?';
    var key = Object.keys(obj);
    key.forEach(function (v) {
      str = str + v + '=' + obj[v] + '&'
    });
    return str;
  }
}
