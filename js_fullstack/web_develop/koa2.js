'use strict';

const Koa = require('koa');

const body_parser = require('koa-bodyparser');

const router = require('koa-router')();

const app = new Koa();
var koa2_main = function(){

app.use(body_parser());

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

    // router.get('/',async(ctx,next)=>{
    //     ctx.response.body = '<h1>Index</h1>';
    // });

    router.get("/",async(ctx,next)=>{
        ctx.response.body = `
             <h1>Index</h1>
             <form action="/signin" method="post">
                 <p>Name:<input name="name" value="koa"></p>
                 <p>Password:<input name="password" type="password"></p>
                 <p><input type="submit" value="Submit"></p>
             </form>
        `;
    });

    router.post('/signin',async(ctx,next)=>{
       var name = ctx.request.body.name ||'';
       var password = ctx.request.body.password||'';
       console.log(`name:${name} password:${password}`);
       if(name==='koa'&&password==='12345'){
           ctx.response.body = `<h1>Welcome ${name}</h1>`;
       }else{
           ctx.response.body = `<h1>Login failed!</h1>`;
       }

    });

    app.use(router.routes());

app.listen(3000);
console.log('port 3000');
}

module.exports = koa2_main;