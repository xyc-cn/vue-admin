/**
 * Created by easonxie on 2016/8/26.
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var formidable = require('formidable');
var fs =require('fs');
var app = express();
var mock = require('./mock');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false,limit: '5mb'}));
// parse application/json
app.use(bodyParser.json({limit: '5mb'}));
// 设置静态目录
app.use(express.static(path.resolve(__dirname, '../dist')));

mock(app);

app.post('/api/upload', function(req, res) {
  var imgPath;
  var form = new formidable.IncomingForm();
  form.uploadDir = "./static";
  form.keepExtensions = true;
  form.on('file', function(name, file) {
    var match = file.path.match(/(upload\w*).(\w*)/);
    var fileName = match[1]+'.'+match[2];
    fs.renameSync(file.path, "../dist/static/img/" + fileName);
    imgPath = 'http://localhost:3001/' + 'static/img/' + fileName;
  });
  form.on('end',function(name, file){
    var data = {
      result: 0,
      message: 'error message',
      data: {url: imgPath, id:'5555'}
    };
    res.json(data)
  });
  //出错
  form.on('error',function(err){
    res.end(err);
  });
  //执行文件上传任务
  form.parse(req,function(){

  });

});

var server = app.listen(3001, function () {
  console.log('Listening on port %d', server.address().port);
});

