'use strict';

var express = require('express');
var fs = require('fs');

var app = express();

var koa_main = function(){
    
    app.get('/',function(req,res){
       res.send('Hello,koa');
    });

    app.get('/test',function(req,res){
        fs.readFile('./data.json',function(err,data){
             if(err){
                 res.status(500).send('read file error!');
             }else{
                 res.type('text/plain');
                 res.send(data);
             }           
        });
    });

    app.listen(3000,function(){
       console.log('listening on port 3000');
    });

  

}

module.exports = koa_main;