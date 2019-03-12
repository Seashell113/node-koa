'use strict'

const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    ctx.response.set('Access-Control-Allow-Origin','*');
    ctx.response.set('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');

    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);

    await next();
});

// parse request body:
app.use(bodyParser());

// add controllers:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');

// 'use strict'
//
// // 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
// const Koa=require('koa');
// const bodyParser = require('koa-bodyparser');
// const router=require('koa-router')();
//
//
//
// // 创建一个Koa对象表示web app本身:
// const app = new Koa();
//
// // 对于任何请求，app将调用该异步函数处理请求：
// // log request URL:
// app.use(async (ctx,next)=>{
//    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
//     await next();
//   // ctx.response.type='text/html';
//   // ctx.response.body='<h1>Hello Koa2!</h1>';
//
// });
//
//
// // 首页
// router.get('/', async (ctx, next) => {
//     ctx.response.body = `<h1>Index</h1>
//         <p><a href="/hello/bob">bob</a></p>
//         <form action="/signin" method="post">
//             <p>Name: <input name="name" value="koa"></p>
//             <p>Password: <input name="password" type="password"></p>
//             <p><input type="submit" value="Submit"></p>
//         </form>`;
// });
// // add url-route
// router.get('/hello/:name',async (ctx,next)=>{
//     var name=ctx.params.name;
//
//     ctx.response.body=`<h1>hello,${name}</h1>`;
// });
// // 处理post
// router.post('/signin',async (ctx,next)=>{
//    var name=ctx.request.body.name || '',
//         password=ctx.request.body.password || '';
//     console.log(`signin with name: ${name}, password: ${password}`);
//     // 验证
//     if (name === 'koa' && password === '12345') {
//         ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
//     } else {
//         ctx.response.body = `<h1>Login failed!</h1>
//         <p><a href="/">Try again</a></p>`;
//     }
// });
//
// app.use(bodyParser());
// app.use(router.routes());
//
//
// // 在端口3000监听:
// app.listen('3000');
// console.log('app started at port 3000...');