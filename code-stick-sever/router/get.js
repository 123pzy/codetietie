const Router = require('koa-router')
const getUsersInfo = require("../utils/options");
const getRouter = new Router()

getRouter.get('/getContent', async (ctx) => {
    const { randomValue } = ctx.request.query;
    console.log('ctx.request.query', ctx.request.query);
    const res = await getUsersInfo(`select * from codestick where randomValue = "${randomValue}";`)
    console.log(res);
    ctx.body = {
        code: 1,
        msg: `获取到content了:${res}!`,
        data: res[0].content
    }
})

module.exports = getRouter;