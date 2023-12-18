const Router = require('koa-router')
const getUsersInfo = require("../utils/options");
const addRouter = new Router()

addRouter.post('/:randomValue', async (ctx) => {
    const { editContent, randomValue } = ctx.request.body;
    const content = editContent.replace(/"/g, "'")
    const res = getUsersInfo(`insert into codestick (randomValue, content) values('${randomValue}', "${content}"); `)
    ctx.body = {
        code: 1,
        msg: `获取到randomValue了:${randomValue} !`
    }
})

module.exports = addRouter;