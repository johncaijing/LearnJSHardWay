'use strict';

const Koa = require('koa');

const router = require('koa-router')();

const app = new Koa();
var koa2_main = function(){

app.use(async(ctx,next)=>{
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
});

app.use(async(ctx,next)=>{
     const start = new Date().getTime();
     await next();
     const cost_time = new Date().getTime() - start;
     console.log(`Time :${cost_time} ms`);
});
  router.get('/hello/:name',async(ctx,next)=>{
        var name = ctx.params.name;
        ctx.response.body = `<h1>Hello,${name}</h1>`;
    });

    router.get('/',async(ctx,next)=>{
        ctx.response.body = '<h1>Index</h1>';
    });

    app.use(router.routes());

app.listen(3000);
console.log('port 3000');
}

module.exports = koa2_main;