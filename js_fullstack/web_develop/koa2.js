'use strict';

const Koa = require('koa');

const app = new Koa();
var koa2_main = function(){
app.use(async (ctx,next)=>{
   await next();
   ctx.response.type = 'text/html';
   ctx.response.body = 'Hello Koa2';

});

app.listen(3000);
console.log('port 3000');
}

module.exports = koa2_main;