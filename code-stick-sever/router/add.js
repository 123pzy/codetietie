const Router = require('koa-router')
const getUsersInfo = require("../utils/options");
const addRouter = new Router()

addRouter.post('/:randomValue', async (ctx) => {
    const { editContent, randomValue, dealLineTime } = ctx.request.body;
    const content = editContent.replace(/"/g, '\\"');
    const res = getUsersInfo(`insert into codestick (randomValue, content, timestamp_out) values('${randomValue}', "${content}",'${dealLineTime}'); `)
    ctx.body = {
        code: 1,
        msg: `获取到randomValue了:${randomValue} !`
    }
})

module.exports = addRouter;