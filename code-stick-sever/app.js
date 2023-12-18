const Koa = require('koa')
const { koaBody } = require('koa-body')
const router = require('./router/index')
const port = 3232
const app = new Koa()

app.use(koaBody())
app.use(router.routes(), router.allowedMethods());

app.listen(port, () => {
    console.log(`${port}端口打开了`);
})