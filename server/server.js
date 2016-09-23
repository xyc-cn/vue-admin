/**
 * Created by easonxie on 2016/8/26.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mock = require('./mock');
var proxy = require('./proxy');
var app = express();
// 设置静态目录
app.use(express.static(path.resolve(__dirname, '../dist')));
// 代理前面不能使用bodyParse中间件，不然会导致代理出去的body参数出错
//proxy(app);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false, limit: '5mb'}));
// parse application/json
app.use(bodyParser.json({limit: '5mb'}));
// 使用内存数据库模拟
mock(app);

var server = app.listen(3000, function () {
  console.log('Listening on port %d', server.address().port);
});

