'use strict';

//fs模块：文件系统模块，负责读写文件
//fs提供同步和异步方法

//异步读文件
var fs = require('fs');
var fs_main = function(){
   
   fs.readFile('./data.json','utf-8',function(err,data){
       if(err){
           console.log(err);
       }else{
           console.log(data);
       }
   });

   //读取二进制文件

   fs.readFile('./js.png',function(err,data){
     if(err){
         console.log(err);
     }else{
         console.log(data);
         console.log(data.length+'bytes');

         //buffer-->stringSS
         var text = data.toString('utf-8');
         console.log(text);

         //string-->buffer
         var buf = new Buffer(text,'utf-8');
         console.log(buf);
     }
   });
   //同步读文件
   try{
       var start_time = new Date();
       var sync_data = fs.readFileSync('./generated.json','utf-8');
       var cost = new Date() - start_time;
       console.log('cost:'+cost);
       console.log(sync_data);
   }catch(err){
       console.log(err);
   }

   //写文件
   var text = 'Hello,Node.js';
   fs.writeFile('output.txt',text,function(err){
       if(err){
           console.log(err);
       }else{
           console.log('write success');
       }
   });

   //同步写文件
   fs.writeFileSync('output2.txt',text);

   //stat 获取文件大小，创建时间
   fs.stat('./data.json',function(err,stat){
       if(err){
           console.log(err);
       }else{
           console.log('isFile:'+stat.isFile());
           console.log('isDirectory:'+stat.isDirectory());
           if(stat.isFile()){
               console.log('size:'+stat.size);
               console.log('birth time:'+stat.birthtime);
               console.log('modified time:'+stat.mtime);
           }
       }
   });



}

module.exports = fs_main;