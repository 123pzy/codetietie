# 1.待优化点

📚💯🚁

- [ ] 设置只能放代码形式的文字，加上免责声明

- [x] 编辑状态下才显示侧边栏

- [ ] 用宽度极大和极小的代码测试样式是否可以

- [ ] 使用浏览器指纹计算有多少个用户查看过此代码，并显示在网站上

- [ ] 增加显示本网站已经提过了多少段代码，计数。

- [ ] 考虑一下免责这件事，看看其他贴代码的网站的做法。

  [![](http://panpan.dapanna.cn//image-20240129132031571.png)](https://modelscope.cn/models/iic/nlp_structbert_sentiment-classification_chinese-large/summary)

- [ ] 搞一个过期代码申请恢复机制（比如关注公众号后台回复指定内容申请恢复，但是申请恢复要考虑一下分享代码人的权益，比如在设置有效期时让分享者选择是否允许申请恢复）。

- [ ] 解决不能存放表情的bug；

- [x] 添加代码转化为图片功能，使用dom-to-image库；

- [x] 没有路径的话自动匹配到添加代码页面

- [ ] 增加设置密码功能

- [x] 使用电池的电量大小显示这段代码的过期前的剩余时间

- [ ] 使用浏览器指纹加一个点赞和看过功能

- [ ] 增加下载为图片的所有配置，模仿：https://codetoimg.com/editor

- [ ] 参考leetcode的这个，在用户输入代码的时候提供一个格式化代码的按钮已经清空按钮

- [x] 使用这种方式识别代码语言类型

  ![image-20240111114123334](http://panpan.dapanna.cn//image-20240111114123334.png)

- [x] 设置用户可以自定义语言类型，否则自动推断代码语言类型

- [ ] 想一下我的这个项目的优势，分享文字代码？代码转图片？

- [ ] [像vue官网一样的黑白主题切换渐变效果](https://wenku.csdn.net/answer/fb4bcf26abeb4283aa3951d17d438580)

- [ ] 电量显示在20%以下时候显示为红色，并且在hover之后的弹出信息中加上过期时间

- [ ] **js->ts**

- [ ] 对用户输入的代码尽心过滤，防止别人删库，xss攻击

- [x] 参考这个网站关于网站的描述：https://paste.ubuntu.com/

- [ ] 限制文件添加个数，比如最多五个

  ![image-20240111140228190](http://panpan.dapanna.cn//image-20240111140228190.png)

- [ ] 设置了阅后即焚之后的电池显示不能和之前一样

- [ ] 增加title功能，用户在复制网页链接的时候自动加上title，比如：【使用频数密度和类型系数判断功能区的混合程度（单一/混合）】 http://www.codetietie.cn/m9jf9bm6i8i

- [x] 添加类似这种在一个链接下打开多个小页面的功能，让用户可以把几段类似的代码放在一个链接下：

  <img src="http://panpan.dapanna.cn//image-20240112092605171.png" alt="image-20240112092605171" style="zoom:67%;" />

- [ ] ~~做一个点赞数量每月排行榜~~

- [ ] ![image-20240112195640767](http://panpan.dapanna.cn//image-20240112195640767.png)

- [ ] 公众号二维码做成这种样式：

  <img src="http://panpan.dapanna.cn//image-20240114215635762.png" alt="image-20240114215635762" style="zoom:50%;" />

- [ ] 编辑代码界面添加这几个leetcode上的按钮功能：

  ![image-20240116134355480](http://panpan.dapanna.cn//image-20240116134355480.png)

- [ ] 设置最多只能添加5个代码文件

- [ ] SEO

- [ ] ❗支持Markdown语法格式❗

- [ ] http://codetietie.cn/not_found/123路径自动跳转not_found页面

- [ ] 设置密码功能

- [ ] 参考这种主题色修改样式：

  ![](http://panpan.dapanna.cn//image-20240120114837921.png)

- [ ] **增加已存在的代码编辑（修改）、删除功能（用户登录的时候添加的代码且是作者本人才具有该功能）**

- [ ] 看一下在IOS上可以下载为图片，是不是因为在style.css中加了一个全局的container配置项。

- [ ] ❗❗❗使用GitHub第三方登录，并尝试能不能在登录之后写个插件，选中GitHub中的代码，右键tocodetietie直接复制粘贴到代码贴贴网站。❗❗❗

  [3分钟 使用 Node.js koa完成GitHub授权登录]( https://www.bilibili.com/video/BV1qC4y1H7LV/?share_source=copy_web&vd_source=e36b1304454aca81770240bc97e01cf8)

  [阮一峰-GitHub OAuth 第三方登录示例教程](https://www.ruanyifeng.com/blog/2019/04/github-oauth.html)

- [ ] 用户登录状态下可以一个链接存放最多10段代码，未登录状态下最多存放5段

- [ ] 参考语雀中代码块的格式和功能：![](http://panpan.dapanna.cn//image-20240123123339877.png)

- [ ] 整体网站风格重塑，可以参考：https://mp.weixin.qq.com/s/A__TEO9islroQii01R3NQA

  <img src="http://panpan.dapanna.cn//image-20240124174900312.png" style="zoom:50%;" />

- [ ] 编辑代码的时候使用monaco-editor做一个web端代码编辑器。参考：https://zhuanlan.zhihu.com/p/590230766?utm_id=0

  https://zhuanlan.zhihu.com/p/627093238?utm_id=0

- [ ] 使用这种可以搜索的下拉框选择代码语言：

  ![](http://panpan.dapanna.cn//image-20240126153045282.png)

- [ ] 代码高亮看一下这个：**shiki**，https://blog.csdn.net/chaoPerson/article/details/135391659

- [ ] 把电池图标等放到一个信息图标hover之后才显示，比如：

<svg t="1706272532872" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4251" width="200" height="20"><path d="M512.50142 958.397886c-119.320573 0-231.499491-46.465265-315.871087-130.837884C112.258737 743.188406 65.792449 631.010511 65.792449 511.688915c0-119.319549 46.466288-231.499491 130.837884-315.871087C281.002952 111.445208 393.180847 64.979944 512.50142 64.979944s231.499491 46.465265 315.871087 130.837884c84.372619 84.372619 130.837884 196.551538 130.837884 315.871087 0 119.321596-46.465265 231.499491-130.837884 315.871087C744.000911 911.932622 631.821993 958.397886 512.50142 958.397886zM512.50142 105.962334c-223.718271 0-405.726581 182.00831-405.726581 405.726581s182.00831 405.726581 405.726581 405.726581c223.718271 0 405.727605-182.00831 405.727605-405.726581S736.220714 105.962334 512.50142 105.962334z" fill="#272636" p-id="4252"></path><path d="M510.150886 775.953647c-18.107403 0-32.745798-14.678304-32.745798-32.785707L477.405087 452.191846c0-18.108426 14.638395-32.785707 32.745798-32.785707 18.107403 0 32.745798 14.678304 32.745798 32.785707l0 290.976094C542.896684 761.275343 528.258289 775.953647 510.150886 775.953647z" fill="#272636" p-id="4253"></path><path d="M511.357364 296.458969m-45.080731 0a44.054 44.054 0 1 0 90.161463 0 44.054 44.054 0 1 0-90.161463 0Z" fill="#272636" p-id="4254"></path></svg>

- [ ] 用户登录之后可以模仿gpt的这种形式，点击查看历史记录，再点击就收起来：

  ![](http://panpan.dapanna.cn//image-20240127163912222.png)

- [ ] 点击分享按钮的**防抖**

- [ ] 给Mac的三个点加上功能，用于最大/小化code板块，比如：代码：http://codetietie.cn/i80ti7rfiqn

  ![macStyle](http://panpan.dapanna.cn//macStyle.gif)

- [ ] 工具代码合集：http://codetietie.cn/yldwf12r4z

- [ ] 使用ts重构整个项目，node版本采用20

- [ ] 看一下这个npm库：@Load languages Extensions

- [ ] 配置codemirror的vscode主题的时候，记得安装这几个库

  ```js
  import { EditorView } from '@codemirror/view';
  import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
  import { tags as t } from "@lezer/highlight";
  ```

  如果一开始修改了index.js中的源码不生效，尝试重新卸载并安装**@lezer/highlight**，再启动项目查看应该vscode主题已经生效。

- [ ] 代码文字大小参考react官网：

  ![image-20240207214011412](http://panpan.dapanna.cn//image-20240207214011412.png)

- [ ] 不再开源，想想网站头部导航栏填什么？要不要加上登录按钮？

- [ ] 做一个类似AtuoDL网站上的这种三个模式：

  [![image-20240216085921286](http://panpan.dapanna.cn//image-20240216085921286.png)](https://www.autodl.com/home)

- [ ] 采用这种方式打开修改代码主题的侧边栏

  <img src="http://panpan.dapanna.cn//image-20240219122017160.png" alt="image-20240219122017160" style="zoom:33%;" />

# 2.待解决bug

- [ ] 还有很多bug要解决，比如现在有个问题就是不能存放表情符号，比如💯这种符号

- [ ] 永不过期功能

- [ ] 代码文件夹功能中文件内容一样，选取标签label的时候多选的问题

  <img src="http://panpan.dapanna.cn//image-20240206234315291.png" alt="image-20240206234315291" style="zoom: 67%;" />

# 3. 个人想法

先发一版，之后新增一些功能或者改了哪些bug之后再在公众号上发一篇文章列举对哪些地方做了更改（升级）。

网站主题：一个极具**自由风格**的代码分享网站。（让用户具有高度的自定义体验，包含网站样式，代码高亮风格等）
