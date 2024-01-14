const Router = require('koa-router')
const getUsersInfo = require("../utils/options");
const getRouter = new Router()

// 判断是否过期
function isTimestampAfterCurrent(timestamp) {
    var currentTimestamp = Date.now();
    if (timestamp > currentTimestamp) {
        return true;
    } else {
        return false;
    }
}

getRouter.get('/getContent', async (ctx) => {
    const { randomValue } = ctx.request.query;
    const res = await getUsersInfo(
        `SELECT code_info.*, code_content.content, code_content.label
        FROM code_info
        INNER JOIN code_content ON code_info.randomValue = code_content.randomValue
        WHERE code_info.randomValue = '${randomValue}';        
    `)
    if (!res[0]) {
        ctx.body = {
            code: 0,
            msg: `访问的代码不存在:${res}!`,
            data: '访问的代码不存在或作者设置了“阅后即焚”'
        }
    } else {
        const dateStr = res[0].timestamp_out;
        const burn = res[0].burn;
        const dateObj = new Date(Number(dateStr));
        const timestamp = dateObj.getTime();
        const dateString = res[0].timestamp_in;
        // 转化构建代码的文字格式时间戳为数字格式：
        const dateObject = new Date(dateString);
        const timestamp_in = dateObject.getTime();
        const selectOptions = []
        for (var i of res) {
            selectOptions.push({
                "label": i.label,
                "value": i.content
            })
        }
        const selectOptions_json = JSON.stringify(selectOptions)
        const data = {
            selectOptions: selectOptions_json,
            timestamp_in,
            timestamp_out: res[0].timestamp_out,
        }
        if (burn) {
            await getUsersInfo(`delete from code_info where randomValue = "${randomValue}";`)
            getUsersInfo(`delete from code_code where randomValue = "${randomValue}";`)
        }
        if (isTimestampAfterCurrent(timestamp)) {
            ctx.body = {
                code: 1,
                msg: `获取到content了:${res}!`,
                data,
            }
        } else {
            ctx.body = {
                code: -1,
                msg: `分享已过期！`,
            }
        }
    }
})

module.exports = getRouter;