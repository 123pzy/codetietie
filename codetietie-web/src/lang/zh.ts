import { langInter } from '@/types/index';
const funcItems = JSON.stringify([
  {
    title: '一键分享代码',
    content: '快速分享创建好的代码',
  },
  {
    title: '同时创建多段代码',
    content: '支持一条链接同时分享多段代码',
  },
  {
    title: '一键复制代码',
    content: '遇见感兴趣的代码片段，一键复制快速“为你所用”',
  },
  {
    title: '切换代码主题',
    content: '多种代码主题色任意切换',
  },
  {
    title: '下载为图片',
    content: '不仅仅支持分享链接，同时满足用户将代码转化为图片分享的习惯',
  },
]);
const zh: langInter = {
  website_title: '代码贴贴',
  website_description: `创建和共享`,
  website_subject: '一个快速分享代码的网站。',
  getStarted: '开始',
  selectCodeFile: '选择代码',
  createCodeBtn: '创建代码',
  shareCodeBtn: '分享',
  shareMessage: '链接已复制',
  notFoundTitle: '页面不见了',
  notFoundDescription: '您正在寻找的页面不存在或代码原作者设置了“阅后即焚”。',
  takeMeHome: '跳转首页',
  placeholder: '分享代码...',
  setDealTime: '设置过期时间：',
  BurnAfterReading: '阅后即焚',
  downPNG: '下载为图片',
  copySuccess: '复制成功！',
  BuyMeACoffee: '送我杯咖啡~',
  Custom: '自定义代码卡片主题',
  callMe: '联系我',
  codeElectricQuantity: '代码剩余电量：',
  confirmBtn: '确认',
  cancelBtn: '取消',
  giveCodeName: '给代码取个名字吧',
  selectCodeLanguage: '选择代码语言',
  neverExpire: '永不过期',
  setEditCodeName: '给代码起个名：',
  setEditCodeLanguage: '设置代码语言：',
  setEditCodeExpireTime: '设置过期时间：',
  editCodeExpireTimePlaceholder: '设置过期时间（默认30天）',
  selectCodeThemeTitle: '设置代码主题',
  selectCodeTheme: '选择主题',
  funcItems: funcItems,
};

export default zh;
