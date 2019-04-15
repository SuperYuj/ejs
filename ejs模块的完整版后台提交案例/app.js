var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var indexRouter = require('./routers/indexRoute');

var app = express();

//必须放到路由前面
app.use(bodyParser.urlencoded({extended:false})); //expanded:false表示解析值类型是string|Array, true表示解析值是任意类型

//设置默认模板引擎是html
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.set("views","views");  //模板所在的目录为views

app.use(express.static('public')); //静态资源所有目录

app.use(indexRouter);

app.listen(8080,function () {
    console.log('服务启动成功,监听8080端口');
});