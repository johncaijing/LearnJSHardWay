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



}

module.exports = fs_main;