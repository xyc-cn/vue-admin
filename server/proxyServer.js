/**
 * Created by easonxie on 2016/8/26.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());
// 设置静态目录
app.use(express.static(path.resolve(__dirname, '../dist')));
// 内存数据库，模拟数据增删改查
var low = require('lowdb');
var mock = require('../test/mock');
db = low();
db._.mixin(require('underscore-db'));
db.defaults({posts: []}).value();
const posts = db.get('posts');
// 插入模拟数据
mock.list.forEach(function (v) {
  db.get('posts').insert(v).value();
});

app.post('/api/del', function (req, res) {
  var id = req.body.id;
  db.get('posts').removeById(id).value();
  var data = {
    result: 0,
    message: 'error message'
  };
  res.json(data)
});

app.post('/api/pass', function (req, res) {
  var id = req.body.id;
  db.get('posts')
    .find({id: id})
    .assign({status: 1})
    .value();
  var data = {
    result: 0,
    message: 'error message'
  };
  res.json(data)
});

app.post('/api/ban', function (req, res) {
  var id = req.body.id;
  db.get('posts')
    .find({id: id})
    .assign({status: 2})
    .value();
  var data = {
    result: 0,
    message: 'error message'
  };
  res.json(data)
});


app.post('/api/detail', function (req, res) {
  console.log(req.body.id);
  var json = db.get('posts').getById(req.body.id).value();
  console.log(json);
  var data = {
    result: 0,
    message: 'error message',
    data: json
  };
  res.json(data)
});

app.post('/api/list', function (req, res) {
  var page = req.body.page ? req.body.page : 1, list, total, search;
  delete req.body.page;
  if (req.body.search) {
    search = req.body.search
    list = db.get('posts').filter(function (a) {
      if (a.name.indexOf(search) >= 0) {
        return a;
      }
    }).drop((page - 1) * 10).take(10).value();
    total = Math.ceil(db.get('posts').filter(function (a) {
        if (a.name.indexOf(search) >= 0) {
          return a;
        }
      }).size().value() / 10);
  } else {
    if (req.body.status < 0) {
      delete req.body.status;
    }
    if (req.body.status) {
      req.body.status = Number(req.body.status);
    }
    list = db.get('posts').filter(req.body).drop((page - 1) * 10).take(10).value();
    total = Math.ceil(db.get('posts').filter(req.body).size().value() / 10);
  }
  var data = {
    result: 0,
    message: 'error message',
    list: list,
    total: total
  };
  res.json(data)
});

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});

