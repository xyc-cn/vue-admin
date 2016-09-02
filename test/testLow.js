var low = require('lowdb');
var mock = require('./mock');
var path = require('path');
db = low();
db._.mixin(require('underscore-db'));
db.defaults({ posts: [] }).value();
const posts = db.get('posts');
mock.list.forEach(function (v) {
  db.get('posts').insert(v).value();
});
var post = db.get('posts').filter(function (a) {
  if(a.name == '共和国海关和'){
    return a;
  }
}).take(10).value();

"static/upload_e09856676dd414b8096ccf904f989fe8.jpg".match(/(upload\w*).(\w*)/);
console.log(RegExp.$1);
console.log(RegExp.$2);
