var express=require('express');
var router=require('./controller/router.js');
var app=express();
//设置模板
app.set('view engine','ejs');
//加载静态资源服务
app.use(express.static('./public'));
app.use(express.static('./uploads'));
//添加首页路由
app.get('/',router.showIndex);
app.get('/:allAbums',router.showAllAbums)
app.use(router.err)

//监听端口
app.listen(2016);