/**
 * Created by Administrator on 2016/8/26.
 */
var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../dist')));

var low = require('lowdb');
var mock = require('../test/mock');
db = low();
db._.mixin(require('underscore-db'));
db.defaults({ posts: [] }).value();
const posts = db.get('posts');
mock.list.forEach(function (v) {
  db.get('posts').insert(v).value();
});

app.post('/api/del', function(req, res){
  var id = req.body.id;
  db.get('posts').removeById(id).value();
  var data = {
    result: 0,
    message: 'error message'
  };
  res.json(data)
});

app.post('/api/pass', function(req, res){
  var id = req.body.id;
  db.get('posts')
    .find({ id: id })
    .assign({ status: 1})
    .value();
  var data = {
    result: 0,
    message: 'error message'
  };
  res.json(data)
});

app.post('/api/ban', function(req, res){
  var id = req.body.id;
  db.get('posts')
    .find({ id: id })
    .assign({ status: 2})
    .value();
  var data = {
    result: 0,
    message: 'error message'
  };
  res.json(data)
});

app.post('/api/search', function(req, res){
  var data = {
    result: 0,
    message: 'error message'
  };
  res.json(data)
});

app.post('/api/filter', function(req, res){
  var data = {
    result: 0,
    message: 'error message'
  };
  res.json(data)
});

app.post('/api/list', function(req, res){
  var page = req.body.page ? req.body.page : 1;
  delete req.body.page;
  if(req.body.status < 0){
    delete req.body.status;
  }
  if(req.body.status){
    req.body.status = Number(req.body.status);
  }
  console.log(req.body);
  var list = db.get('posts').filter(req.body).drop((page-1)*10).take(10).value();
  var total = Math.ceil(db.get('posts').filter(req.body).size().value()/10);
  var data = {
    result: 0,
    message: 'error message',
    list:list,
    total:total
  };
  res.json(data)
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});

var json = [{
  id: 1,
  name: '小结结',
  sex: '男',
  age: '12',
  birthday: '2016-12-10',
  hobby: '打球',
  img: 'http://imgcache.gtimg.cn/club/mobile/qq_comic/comic_category/img/upload_365ef666d4c949333c0306b6a3ca5131.jpg?max_age=31536000&styleVersion=0',
  height: '172cm',
  home: '山东'
},
  {
    id: 2,
    name: '小结结',
    sex: '男',
    age: '12',
    birthday: '2016-12-10',
    hobby: '打球',
    imgList: ['http://imgcache.gtimg.cn/club/mobile/qq_comic/comic_category/img/upload_365ef666d4c949333c0306b6a3ca5131.jpg?max_age=31536000&styleVersion=0', 'http://imgcache.gtimg.cn/club/mobile/qq_comic/comic_category/img/upload_868645da375d140436226b7fcfcde992.jpg?max_age=31536000&styleVersion=0'],
    height: '172cm',
    home: '广东'
  },{
    id: 3,
    name: '小结结',
    sex: '男',
    age: '12',
    birthday: '2016-12-10',
    hobby: '打球',
    img: 'http://imgcache.gtimg.cn/club/mobile/qq_comic/comic_category/img/upload_365ef666d4c949333c0306b6a3ca5131.jpg?max_age=31536000&styleVersion=0',
    height: '172cm',
    home: '山东'
  },
  {
    id: 4,
    name: '小结结',
    sex: '男',
    age: '12',
    birthday: '2016-12-10',
    hobby: '打球',
    imgList: ['http://imgcache.gtimg.cn/club/mobile/qq_comic/comic_category/img/upload_365ef666d4c949333c0306b6a3ca5131.jpg?max_age=31536000&styleVersion=0', 'http://imgcache.gtimg.cn/club/mobile/qq_comic/comic_category/img/upload_868645da375d140436226b7fcfcde992.jpg?max_age=31536000&styleVersion=0'],
    height: '172cm',
    home: '广东'
  },{
    id: 5,
    name: '小结结',
    sex: '男',
    age: '12',
    birthday: '2016-12-10',
    hobby: '打球',
    img: 'http://imgcache.gtimg.cn/club/mobile/qq_comic/comic_category/img/upload_365ef666d4c949333c0306b6a3ca5131.jpg?max_age=31536000&styleVersion=0',
    height: '172cm',
    home: '山东'
  },
  {
    id: 6,
    name: '小结结',
    sex: '男',
    age: '12',
    birthday: '2016-12-10',
    hobby: '打球',
    imgList: ['http://imgcache.gtimg.cn/club/mobile/qq_comic/comic_category/img/upload_365ef666d4c949333c0306b6a3ca5131.jpg?max_age=31536000&styleVersion=0', 'http://imgcache.gtimg.cn/club/mobile/qq_comic/comic_category/img/upload_868645da375d140436226b7fcfcde992.jpg?max_age=31536000&styleVersion=0'],
    height: '172cm',
    home: '广东'
  }];
