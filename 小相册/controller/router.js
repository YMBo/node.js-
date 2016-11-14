var file=require('../moudel/file.js');
//路由
exports.showIndex=function(req,res){
	/**/
	file.getAllAbums(function(allAbums){
		res.render('index',{
			names:allAbums
		});
			
	})
}
exports.showAllAbums=function(req,res){
	//遍历这个文件夹下的图片
	var albumName=req.params.allAbums;
	file.showAllAbums(albumName,function(images){
		res.render('album',{
			wj:albumName,
			srcs:images
		})
	})
}
exports.err=function(req,res){
	res.render('404')
}