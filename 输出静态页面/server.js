//获取http模块
var http=require('http');
//获取url模块
var url=require('url');
//获取fs模块
var fs=require('fs');
//获取path模块
var path=require('path');
//创建服务器
http.createServer(function(req,res){
	//获取请求的文件路径
	var pathname=url.parse(req.url).pathname;
	//规范化字符串路径
	if(pathname.indexOf('.')==-1){
		pathname+='/demo.html'
	}
	var filename=path.normalize('./任务5'+pathname);
	//获取请求文件路径扩展名，来半段content-type内容
	var extname=path.extname(pathname);
	//读取相应文件
	fs.readFile(filename,function(err,data){
		var mime=getType(extname);
		res.writeHead(200,{'content-type':mime+';charset=utf-8'});
		res.end(data);
	})
}).listen(2016)
function getType(extname){
	switch(extname){
		case '.html':
			return 'text/html'
		case '.css':
			return 'text/css';
		default:
		break;
	}
}