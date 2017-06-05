'use strict';

//stream

var fs = require('fs');
var stream_main = function(){
   
   var rs = fs.createReadStream('./js.png');
   rs.on('data',function(chunk){
       console.log('Data:');
       console.log(chunk);
   });

   rs.on('end',function(){
       console.log('end');
   });

   rs.on('error',function(err){
       console.log('error:'+err);
   });

   //pipe readable流流入writable流

   var rs1 = fs.createReadStream('./data.json');
   var ws = fs.createWriteStream('./copied.json');

   rs1.pipe(ws);
   

}


module.exports = stream_main;