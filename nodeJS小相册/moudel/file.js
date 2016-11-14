var fs=require('fs');
exports.getAllAbums=function(callback){
	fs.readdir('./uploads',function(err,files){
		var allAbums=[];
		(function iterator(i){
			if( i == files.length){
				callback(allAbums);
				return;
			}
			fs.stat('./uploads/'+files[i],function(err,stats){
				if(stats.isDirectory()){
					allAbums.push(files[i])
				}
				iterator(i+1);
			})
		})(0)
	})
}
exports.showAllAbums=function(albumName,callback){
	fs.readdir('./uploads/'+albumName,function(err,files){
		var images=[];
		(function iterator(i){
			if( i == files.length){
				callback(images);
				return;
			}
			fs.stat('./uploads/'+albumName+'/'+files[i],function(err,stats){
				console.log(__dirname)
				if( !stats.isDirectory()){
					images.push(files[i])
				}
				iterator(i+1);
			})
		})(0)
	})
}