var low = require('lowdb');
var mock = require('./mock');
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
console.log(db.get('posts').size().value());
console.log(post);
