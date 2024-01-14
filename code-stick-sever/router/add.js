const Router = require('koa-router')
const getUsersInfo = require("../utils/options");
const addRouter = new Router()

addRouter.post('/:randomValue', async (ctx) => {
    const { editContent, randomValue, dealLineTime, burn, label } = ctx.request.body;
    const content = editContent.replace(/"/g, '\\"');
    await getUsersInfo(`insert into code_info (randomValue, timestamp_out, burn) values('${randomValue}', '${dealLineTime}',${burn});`)
    await getUsersInfo(`INSERT INTO code_content (content, randomValue,label) VALUES ("${content}", '${randomValue}','${label}')`)
    ctx.body = {
        code: 1,
        msg: `获取到randomValue了:${randomValue} !`
    }
})

addRouter.post('/updateCodeFile/:randomValue', async (ctx) => {
    const { editContent, randomValue, label } = ctx.request.body;
    const content = editContent.replace(/"/g, '\\"');
    await getUsersInfo(`INSERT INTO code_content (content, randomValue,label) VALUES ("${content}", '${randomValue}','${label}');`)
    ctx.body = {
        code: 1,
        msg: '更新完成！'
    }
})

module.exports = addRouter;