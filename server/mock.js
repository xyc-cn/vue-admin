module.exports = function (app) {
  var low = require('lowdb');
  var mock = require('../test/mock');
  db = low();
  db._.mixin(require('underscore-db'));
  db.defaults({posts: [],banner: []}).value();
  const posts = db.get('posts');
// 插入模拟数据
  mock.list.forEach(function (v) {
    db.get('posts').insert(v).value();
  });
  mock.bannerList.forEach(function (v) {
    db.get('banner').insert(v).value();
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
      search = req.body.search;
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
      if (req.body.status){
        req.body.status = Number(req.body.status)
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

  app.post('/api/bannerList', function (req, res) {
    var page = req.body.page ? req.body.page : 1;
    delete req.body.page;
    var list = db.get('banner').drop((page - 1) * 4).take(4).value();
    var total = Math.ceil(db.get('banner').size().value() / 4);
    var data = {
      result: 0,
      message: 'error message',
      list: list,
      total: total
    };
    res.json(data)
  });

  app.post('/api/addBanner', function (req, res) {
    var page = req.body.page ? req.body.page : 1;
    delete req.body.page;
    var list = db.get('banner').drop((page - 1) * 4).take(4).value();
    var total = Math.ceil(db.get('banner').size().value() / 4);
    var data = {
      result: 0,
      message: 'error message',
      list: list,
      total: total
    };
    res.json(data)
  });

  app.post('/api/delBanner', function (req, res) {
    var id = req.body.id;
    db.get('banner').removeById(id).value();
    var data = {
      result: 0,
      message: 'error message'
    };
    res.json(data)
  });

  app.post('/api/passBanner', function (req, res) {
    var id = req.body.id;
    db.get('banner')
      .find({id: id})
      .assign({status: 1})
      .value();
    var data = {
      result: 0,
      message: 'error message'
    };
    res.json(data)
  });

  app.post('/api/banBanner', function (req, res) {
    var id = req.body.id;
    db.get('banner')
      .find({id: id})
      .assign({status: 2})
      .value();
    var data = {
      result: 0,
      message: 'error message'
    };
    res.json(data)
  });
};
