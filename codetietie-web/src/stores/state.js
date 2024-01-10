import { defineStore } from "pinia";

export const useState = defineStore("state", {
    state: () => {
        return {
            state: false,
            CN: localStorage.getItem('CN') || 'English',
            daysToAdd: 30,
            burn: false,
            theme: localStorage.getItem('theme') || 'light',
            text_cn: { website_title: '代码贴贴', website_description: `创建和共享<br>beautiful code`, website_subject: '使用这个工具可以让你快速便捷分享美丽的代码，同时你可以设置过期时间，阅后即焚等功能，并且你还可以使用这个网站把代码转化为图片。', getStarted: '开始', shareCodeBtn: '分享代码', notFoundTitle: '页面不见了', notFoundDescription: '您正在寻找的页面不存在或代码原作者设置了“阅后即焚”。', takeMeHome: '跳转首页', placeholder: '分享你的代码吧...', setDealTime: '设置过期时间：', BurnAfterReading: '阅后即焚', downPNG: '下载为图片', copySuccess: '复制成功！', BuyMeACoffee: '送我杯咖啡~', Github: '欢迎star~⭐', callMe: '关注/联系我：', codeElectricQuantity: '代码剩余电量：' },
            text_en: { website_title: 'codetietie', website_description: 'Create and share beautiful code', website_subject: 'Using this tool allows you to quickly and easily share beautiful code, you can set expiration time, burn after reading and other features, and you can also use the site to convert code into pictures.', getStarted: 'Get Started', shareCodeBtn: 'share code', notFoundTitle: 'PAGE NOT FOUND', notFoundDescription: 'The page you are looking for does not exist or the author has set "Burn after reading", either way the code is gone.', takeMeHome: 'Take me home', placeholder: 'Show me your code...', setDealTime: 'Expiration:', BurnAfterReading: 'Burn after reading', downPNG: 'Download as PNG', copySuccess: 'copyed!', BuyMeACoffee: 'Buy me a Coffee', Github: 'Welcome star~⭐', callMe: 'follow/contact me:', codeElectricQuantity: 'Code remaining power：' },
            text: {}
        };
    },
    actions: {
        changeCN() {
            this.text = this.text === this.text_cn ? this.text_en : this.text_cn
        }
    },
});