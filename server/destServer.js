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

app.post('/api/list', function (req, res) {
  console.log(req.body);
  var list =[{
    name: '我是代理过来的数据',
    sex: '男',
    age: '12',
    birthday: '2016-12-10',
    hobby: '打球',
    img: 'http://p.qpic.cn/comic/PiajxSqBRaEIsCl4tgeGeD9V9ViaE1VHrfTxuPwu7ZrFgbvfz6ELyJQQ/400/',
    height: '172cm',
    home: '山东',
    status: 0
  }];
  var data = {
    result: 0,
    message: 'error message',
    list: list,
    total: 1
  };
  res.json(data)
});

var server = app.listen(3001, function () {
  console.log('Listening on port %d', server.address().port);
});

