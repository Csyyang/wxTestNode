var express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
var bodyParser = require('body-parser');

var app = express();
app.use('/api', createProxyMiddleware({
  target: 'http://v.juhe.cn', changeOrigin: true, pathRewrite: {
    '^/api/': '/', // rewrite path
  },
}));
app.use('/', express.static('static'))
app.use(bodyParser.urlencoded({ extended: false }));



app.post('/screen', function (req, res) {
  const obj = ["http://yangyangcsy.cn/img/交流.png", "http://yangyangcsy.cn/img/团队.png", "http://yangyangcsy.cn/img/新闻.png"]
  res.json(obj)
})

app.post('/indexModle', function (req, res) {
  const obj = [
    { name: "天气预报", src: "http://yangyangcsy.cn/img/天气.png" },
    { name: "轻松一刻", src: "http://yangyangcsy.cn/img/笑哭.png" },
    { name: "今日头条", src: "http://yangyangcsy.cn/img/新闻.png" },
    { name: "驾考宝典", src: "http://yangyangcsy.cn/img/车.png" },
  ]
  res.json(obj)
})

app.listen(443, function () {
  console.log('success');
});
