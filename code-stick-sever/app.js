const Koa = require('koa')
const { koaBody } = require('koa-body')
const router = require('./router/index')
const port = 3232
const app = new Koa()

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200;
    } else {
        await next();
    }
});
app.use(koaBody())
app.use(router.routes(), router.allowedMethods());

app.listen(port, () => {
    console.log(`${port}端口打开了`);
})