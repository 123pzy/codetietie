<template>
  <div class="code-content-container">
    <Drawer v-show="edit" />
    <div class="code-box">
      <div class="content" ref="codeContentDOM">
        <div class="header">
          <div class="aside-left">
            <div class="mac-style-box">
              <div class="red"></div>
              <div class="yellow"></div>
              <div class="green"></div>
            </div>
            <!-- 代码文件选择 -->
            <div class="select-code">
              <n-input
                :placeholder="t('giveCodeName')"
                v-model:value="codeTitle"
                autosize
                style="width: 100%"
                v-show="state.state"
              />
              <n-select
                size="small"
                v-model:value="codeChoiced"
                :options="selectOptions"
                :render-tag="renderTag"
                :node-props="generateOptionProps"
                @update:value="changeCodeContent"
                v-show="!state.state"
                :show-checkmark="false"
                v-if="path"
              />
              <n-icon
                size="25"
                style="cursor: pointer"
                @click="addCodeFile"
                v-show="!state.state"
                v-if="path"
              >
                <Add />
              </n-icon>
            </div>
          </div>
          <!-- 选择代码语言 -->
          <div class="choice-language" v-show="state.state">
            <n-select
              size="medium"
              :placeholder="t('selectCodeLanguage')"
              v-model:value="codeLanguage"
              :options="codeOptions"
              :node-props="generateOptionProps"
              @update:value="changeLanguage"
              :show-checkmark="false"
            />
          </div>
          <div class="aside-right" v-show="!state.state" v-if="path">
            <!-- "代码剩余电量" -->
            <n-space style="cursor: pointer">
              <n-tooltip placement="top" trigger="hover">
                <template #trigger>
                  <div class="battery-box">
                    <div class="battery-body">
                      <div class="bar"></div>
                      <div class="electric-quantity">
                        {{ timeBar.toFixed(0) }}%
                      </div>
                    </div>
                    <div class="battery-header"></div>
                  </div>
                </template>
                <img src="../assets/power.svg" alt="" style="height: 16px" />{{
                  $t('codeElectricQuantity')
                }}{{ timeBar.toFixed(1) }}%
              </n-tooltip>
            </n-space>
            <!-- 下载为图片 -->
            <n-space>
              <n-tooltip placement="top" trigger="hover">
                <template #trigger>
                  <img
                    src="../assets/download-image.svg"
                    class="download-img-icon"
                    @click="downloadImg"
                    v-show="!state.state"
                  />
                </template>
                {{ $t('downPNG') }}
              </n-tooltip>
            </n-space>
            <!-- 复制代码 -->
            <n-space>
              <n-tooltip
                placement="top"
                trigger="click"
                v-model:show="showTooltip"
              >
                <template #trigger>
                  <img
                    src="../assets/copyIcon.svg"
                    class="copy-icon"
                    @click="copyCode"
                    v-show="!state.state"
                  />
                </template>
                {{ copyStatus }}
              </n-tooltip>
            </n-space>
            <div class="code-class hljs">{{ codeClass }}</div>
          </div>
        </div>
        <div class="code" v-show="!edit" ref="codeHtml">
          <highlightjs
            :autodetect="autodetect"
            :code="content"
            :language="currentLanguage"
          />
        </div>
        <n-space vertical>
          <n-input
            class="edit-box"
            v-show="edit"
            v-model:value="editContent"
            ref="textArea"
            type="textarea"
            :placeholder="t('placeholder')"
          />
        </n-space>
      </div>
      <!-- 用来生成图片的DOM -->
      <div>
        <div class="content-copy" ref="codeDOM">
          <div class="box">
            <div class="copy-box">
              <div class="header">
                <div class="mac-style-box"></div>
                <div class="aside-right">
                  <div class="code-class hljs">{{ codeClass }}</div>
                </div>
              </div>
              <div class="code-copy" v-show="!edit" ref="codeHtml">
                <highlightjs
                  :autodetect="autodetect"
                  :code="content"
                  :language="currentLanguage"
                />
              </div>
            </div>
            <div class="websit-URL">codetietie.cn</div>
          </div>
        </div>
      </div>
      <div class="btn">
        <div class="edit-btn" v-show="edit">
          <CodeButton @click="confirmFunc(addFileStatus)">{{
            $t('confirmBtn')
          }}</CodeButton>
          <CodeButton @click="cancelFunc">{{ $t('cancelBtn') }}</CodeButton>
        </div>
        <div class="share-btn">
          <CodeButton @click="createCode" v-show="!edit"
            >{{ $t('createCodeBtn') }}
          </CodeButton>
          <CodeButton @click="shareCode" v-show="!edit"
            >{{ $t('shareCodeBtn') }}
            <img
              style="height: 55%"
              v-show="state.theme !== 'dark'"
              src="../assets/share-code-light.svg"
              alt=""
            />
            <img
              style="height: 55%"
              v-show="state.theme === 'dark'"
              src="../assets/share-code-dark.svg"
              alt=""
            />
          </CodeButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, Ref, watch, h, watchEffect } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { addCodeFolder, getCodeStick, updateCodeFile } from '../api/request.js';
import {
  NTooltip,
  NSpace,
  NInput,
  useMessage,
  NIcon,
  NSelect,
  NTag,
} from 'naive-ui';
import { ReceiptOutline, Add, CopyOutline } from '@vicons/ionicons5';
import { useState } from '../stores/state.js';
import html2canvas from 'html2canvas';
import Drawer from './Drawer.vue';
import { storeToRefs } from 'pinia';
import CodeButton from './CodeButton.vue';
import { useI18n } from 'vue-i18n';
import codeOptions from '../data/language-names';

const { t } = useI18n();
const edit: Ref<boolean> = ref(false);
const content: Ref<string> = ref('');
const router = useRouter();
const route = useRoute();
var randomValue = ref('');
const codeTitle = ref();
const textArea = ref();
const path = ref(route.params.randomValue == 'codetietie' ? false : true);
const codeLanguage = ref();
var currentLanguage = ref('');
const autodetect = ref();
const codeChoiced = ref('Select code');

// 点击“分享代码”按钮之后
const state = useState();
var { addFileStatus } = storeToRefs(state);
const editContent = ref('');
function createCode(): void {
  addFileStatus.value = false;
  codeLanguage.value = null;
  editContent.value = '';
  codeTitle.value = '';
  state.state = true;
  codeClass.value = '';
  edit.value = true;
  // textarea元素自动获取焦点
  nextTick(() => {
    textArea.value.focus();
  });
}

// 点击分享按钮
const message = useMessage();
function shareCode() {
  var currentPageUrl = location.href;
  copyFunc(currentPageUrl);
  message.success(`${t('shareMessage')}`, {
    icon: () => h(NIcon, null, { default: () => h(CopyOutline) }),
  });
}

// 点击“➕”新增代码文件
async function addCodeFile() {
  addFileStatus.value = true;
  codeLanguage.value = null;
  state.state = true;
  editContent.value = '';
  codeTitle.value = '';
  edit.value = true;
  // textarea元素自动获取焦点
  nextTick(() => {
    textArea.value.focus();
  });
}

// 点击确认添加之后
async function confirmFunc(val) {
  if (!editContent.value) {
    // 提示不能分享空代码
    message.warning('输入代码不能为空~', {
      icon: () => h(NIcon, null, { default: () => h(ReceiptOutline) }),
    });
  } else {
    if (!codeTitle.value) codeTitle.value = 'Anonymous code';
    if (!codeLanguage.value) codeLanguage.value = '';
    selectOptions.value.push({
      label: codeTitle.value.toString(),
      value: editContent.value,
      language: codeLanguage.value,
    });
    if (!val) {
      content.value = editContent.value;
      timeBar.value = 100;
      randomValue.value = Math.random().toString(36).substr(2); // 生成随机字符串
      // 获取当前时间的时间戳
      var currentTimeStamp = Date.now();
      // 设置要增加的天数
      var daysToAdd = state.daysToAdd;
      // 计算未来的时间戳
      var dealLineTime = currentTimeStamp + daysToAdd * 24 * 60 * 60 * 1000;
      router.push(randomValue.value);
      const data = {
        randomValue: randomValue.value,
        editContent: editContent.value,
        label: codeTitle.value,
        language: codeLanguage.value,
        dealLineTime: dealLineTime,
        burn: state.burn,
      };
      selectOptions.value = [
        {
          label: codeTitle.value,
          value: editContent.value,
          language: codeLanguage.value,
        },
      ];
      await addCodeFolder(data);
    } else {
      const data = {
        randomValue: route.params.randomValue,
        editContent: editContent.value,
        label: codeTitle.value,
        language: codeLanguage.value,
      };
      await updateCodeFile(data);
    }
    content.value = selectOptions.value.at(-1).value; // 点击确认之后自动显示刚刚添加的代码
    codeChoiced.value = selectOptions.value.at(-1).label; // 自动显示刚刚添加的代码label
    getCodeClass(); // 更新代码类型
    currentLanguage.value = selectOptions.value.at(-1).language;
    edit.value = false;
    state.state = false;
    codeLanguage.value = ''; // 重置代码语言类型
  }
}

// 取消添加代码
async function cancelFunc() {
  editContent.value = '';
  getCodeClass();
  state.state = false;
  edit.value = false;
}

const codeHtml = ref(); // 获取元素实例
var codeClass: Ref<string> = ref(''); // 定义初始代码类型

// 拉取代码
const timeBar = ref(52);
async function getCode() {
  const res = await getCodeStick(route.params.randomValue);
  if (res.data.code === 0) {
    router.push('/not_found');
  } else if (res.data.code === -1) {
    timeBar.value = 0;
    content.value = res.data.msg;
  } else {
    // 计算代码剩余电量
    const currentTimeStamp = new Date().getTime();
    timeBar.value =
      ((res.data.data.timestamp_out - currentTimeStamp) /
        (res.data.data.timestamp_out - res.data.data.timestamp_in)) *
      100;
    selectOptions.value = JSON.parse(res.data.data.selectOptions);
    content.value = selectOptions.value[0].value;
    currentLanguage.value = selectOptions.value[0].language;
    codeChoiced.value = selectOptions.value[0].label; // 设置初始代码label
  }
}

// 更新代码类型查询
function getCodeClass() {
  nextTick(() => {
    codeClass.value = currentLanguage.value
      ? currentLanguage.value
      : codeHtml.value.childNodes[0].childNodes[0].classList[1] || 'txt';
  });
}
// 拉取代码并识别代码类型
onMounted(async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
  await getCode();
  // 获取到code元素之后更新代码类型
  nextTick(() => {
    getCodeClass();
  });
});
// 动态路由参数变化时重新拉取代码并更新代码类型
watch(
  () => route.params,
  async () => {
    if (route.params.randomValue !== randomValue.value) {
      await getCode();
    }
    path.value = route.params.randomValue == 'codetietie' ? false : true;
    getCodeClass(); // 更新代码类型
  }
);

// 选择代码文件
var selectOptions: any = ref([]);
const renderTag = ({ option, handleClose }) => {
  return h(
    NTag,
    {
      type: option.type as 'success' | 'warning' | 'error',
      closable: false,
      onMousedown: (e: FocusEvent) => {
        e.preventDefault();
      },
      onClose: (e: MouseEvent) => {
        e.stopPropagation();
        handleClose();
      },
    },
    { default: () => option.label }
  );
};

// 下拉框的样式
function generateOptionProps() {
  return {
    style: {
      color: '#cfcfcf',
      'font-size': '0.8rem',
      'background-color': '#353535',
      '--n-option-color-pending': 'rgb(68, 68, 68)',
    },
  };
}

function changeLanguage(value) {
  codeLanguage.value = value;
}
// 根据代码名选择代码
function changeCodeContent(value, option) {
  content.value = value;
  currentLanguage.value = option.language;
  getCodeClass();
}
watchEffect(() => {
  autodetect.value = currentLanguage.value ? false : true;
});
// 一键复制代码
const copyStatus = ref('');
const showTooltip: Ref<boolean> = ref(false);

// 复制功能的函数
function copyFunc(value) {
  const textarea = document.createElement('textarea');
  textarea.value = value;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}
function copyCode() {
  copyFunc(content.value);
  copyStatus.value = `😎${t('copySuccess')}`;
  showTooltip.value = true;

  setTimeout(() => {
    showTooltip.value = false;
  }, 2000);
}

// 下载代码为图片
var codeDOM = ref(null);
function downloadImg() {
  html2canvas(<any>codeDOM.value).then(function (canvas) {
    // 创建一个临时链接元素
    var link = document.createElement('a');

    // 将画布转换为图片URL
    var image = canvas.toDataURL();

    // 设置链接元素的href属性为图片URL
    link.href = image;

    // 设置链接元素的下载属性为截图.png
    link.download = 'image-codetietie.png';

    // 模拟点击链接元素，开始下载
    link.click();
  });
}
</script>

<style scoped>
.code-content-container {
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);
  overflow: hidden;
}
.code-box {
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-image: linear-gradient(
      90deg,
      var(--line-color) 2.5%,
      rgba(0, 0, 0, 0) 3%
    ),
    linear-gradient(360deg, var(--line-color) 2.5%, rgba(0, 0, 0, 0) 3%);
  background-size: 20px 20px;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
}
.content {
  height: fit-content;
  width: fit-content;
  min-width: 18rem;
  max-width: 90vw;
  box-sizing: content-box;
  background-color: #1e1e1e;
  overflow: auto;
  border-radius: 1.2rem;
  position: absolute;
}
.content-copy {
  height: fit-content;
  width: fit-content;
  padding: 2.2rem 2.2rem 0.2rem 2.2rem;
  background-image: linear-gradient(to top right, #8720fd, #ffc832);
  position: relative;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  transform: scale(2);
}
.copy-box {
  height: 100%;
  width: 100%;
  min-width: 11rem;
  min-height: 5rem;
  border-radius: 12px;
  overflow: auto;
  background-color: #1e1e1e;
  box-shadow: 0px 20px 15px 5px rgba(34, 34, 36, 0.26);
}
pre {
  margin: -1rem 0 0 0;
}
.websit-URL {
  font-family: Fira Code, sans-serif;
  font-weight: 700;
  color: rgba(220, 221, 225, 0.8);
  float: right;
  margin-top: 0.5rem;
  position: relative;
  left: 1rem;
}
.code {
  max-height: 68vh;
  min-height: 20vh;
  overflow: auto;
}
.header {
  color: #fff;
  height: 3rem;
  line-height: 3rem;
  padding-left: 1rem;
  background-color: #1e1e1e;
  display: flex;
  align-items: center;
}
.aside-left {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  margin-right: 3.2rem;
}

.select-code {
  display: flex;
  gap: 0.3rem;
  width: 10vw;
  margin-right: 1.2rem;
}
.n-select {
  display: flex;
}

.choice-language {
  position: relative;
  right: 4rem;
  width: 10vw;
  min-width: 6rem;
}
.mac-style-box {
  color: #000;
  height: 1rem;
  display: flex;
  align-items: center;
  gap: 0.66rem;
}
.red {
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: #de4243;
}
.yellow {
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: #e69e2a;
}
.green {
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: #11a73e;
}
.red:hover::before {
  content: '×';
}
.yellow:hover::before {
  content: '－';
}
.green:hover::before {
  content: '+';
}
.red:hover::before,
.yellow:hover::before,
.green:hover::before {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.aside-right {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1rem;
}
.battery-box {
  position: relative;
  bottom: 1.69px;
  right: 2px;
}

.battery-body {
  height: 1.04rem;
  width: 2rem;
  border: 0.1rem solid #f9fafd;
  border-radius: 6.6px;
  position: relative;
  overflow: hidden;
}
.electric-quantity {
  color: #ccc8c8;
  mix-blend-mode: difference;
  font-size: 0.56rem;
  font-family: Firacode_Medium;
  font-weight: 900;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.battery-header {
  height: 0.3rem;
  width: 0.1rem;
  position: absolute;
  right: -0.15rem;
  background-color: #f9fafd;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 0 25px 25px 0;
}

.bar {
  height: 105%;
  width: v-bind(timeBar + '%');
  background-color: #7ffc6f;
  position: absolute;
}
.download-img-icon,
.copy-icon {
  height: 1.16rem;
  position: relative;
  top: 0.15rem;
  cursor: pointer;
}
.code-class {
  margin-right: 1rem;
}
.edit-box {
  min-height: 50vh;
  min-width: 45vw;
  background-color: #f1f1f2;
}
.btn {
  position: absolute;
  bottom: 6vh;
  left: 50%;
  transform: translateX(-50%);
}
.share-btn,
.edit-btn {
  display: flex;
  gap: 1.6rem;
}
/* 设置滚动条的大小 */
.edit-box::-webkit-scrollbar,
.code::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.edit-box::-webkit-scrollbar-thumb,
.code::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  /* background: rgba(0, 0, 0, 0.2); */
  background: #999;
}
.edit-box::-webkit-scrollbar-track,
.code::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  /* background: rgba(0, 0, 0, 0.1); */
  background: #1e1e1e;
}
@media (max-width: 768px) {
  .content-copy {
    transform: scale(1.8);
  }
  .code-box {
    padding-bottom: 2.5rem;
  }
  .select-code {
    width: 20vw;
  }
}
</style>
