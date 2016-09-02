/**
 * Created by easonxie on 2016/8/30.
 */
var proxy = require('express-http-proxy');
module.exports = function (app) {

  app.use('/api/upload', proxy('localhost:3001', {
    forwardPath: function (req, res) {
      // 设置路径
      return require('url').parse(req.baseUrl).path;
    },
    reqAsBuffer: true,
    reqBodyEncoding: null,
    limit: '5mb'
  }));

  app.use('/api', proxy('localhost:3001', {
    forwardPath: function (req, res) {
      // 设置路径
      return req.originalUrl;
    },
    decorateRequest: function(proxyReq, originalReq) {
      // 替换参数名称
    //  proxyReq.bodyContent = proxyReq.bodyContent.replace(/search/, 'searchStr');
      return proxyReq;
    }
  }));

};
