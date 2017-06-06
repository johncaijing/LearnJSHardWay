'use strict';

//http
//request对象：封装HTTP请求
//response对象：封装HTTP响应

var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response){
     console.log(request.method + ':'+request.url);
     response.writeHead(200,{'Content-Type':'text/html'})
     response.end('<h1>Hello NodeJs</h1>');
});

server.listen(8080);

console.log('server is running at http://127.0.0.1:8080');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

