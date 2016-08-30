/**
 * Created by easonxie on 2016/8/30.
 */
var proxy = require('express-http-proxy');
module.exports = function (app) {
  app.use('/api/list', proxy('localhost:3001', {
    forwardPath: function (req, res) {
      // 设置路径
      return require('url').parse(req.baseUrl).path;
    },
    decorateRequest: function(proxyReq, originalReq) {
      // 替换参数名称
      proxyReq.bodyContent = proxyReq.bodyContent.replace(/search/, 'searchStr');
      return proxyReq;
    },
    intercept: function (rsp, data, req, res, callback) {
      // 修改返回值
      data = JSON.parse(data.toString('utf8'));
      data.list[0].home = "我本来是山东，但是我被代理修改了值";
      callback(null, JSON.stringify(data));
    }
  }));
};
