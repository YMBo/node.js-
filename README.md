想要用node在页面输出静态页面，需要用到fs模块的readFile（）方法，但这样就行了么，这样浏览器仅仅找到了这个html页面，而这个页面引用的 css,js,img等都没有     被找到，所以就要将这些东西的地址也要添加进readdFile里面，思路是当浏览器请求哪个文件就将这个文件的地址 放入readFile里面    
```javascript    
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
	var pathname=url.parse(req.url).pathname;  //用来获取每次请求文件的路径

	if(pathname.indexOf('.')==-1){             //目的是当输入localhost：2016而不是localhost：2016/demo.html时间也能显示demo.html页面
		pathname+='/demo.html'
	}
	var filename=path.normalize('./任务5'+pathname);     //规范化字符串路径
	 
	var extname=path.extname(pathname);    //获取请求文件路径扩展名，来判断content-type内容
	
	fs.readFile(filename,function(err,data){    //读取相应文件
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
```
