<template>
  <div class="code-content-container">
    <Drawer v-show="edit" />
    <div class="code-box">
      <div class="content">
        <div class="header">
          <div class="aside-left">
            <div class="circle"></div>
            <!-- 代码文件选择 -->
            <div class="select" ref="select">
              <n-select
                v-model:value="selectCode"
                size="small"
                :options="selectOptions"
                :render-tag="renderTag"
              />
            </div>
          </div>
          <div class="aside-right">
            <!-- "代码剩余电量" -->
            <n-space style="cursor: pointer" v-show="!state.state">
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
                  state.text.codeElectricQuantity
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
                {{ state.text.downPNG }}
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
          <highlightjs :autodetect="true" :code="content" />
        </div>
        <n-space vertical>
          <n-input
            class="edit-box"
            v-show="edit"
            v-model:value="editContent"
            ref="textArea"
            type="textarea"
            :placeholder="state.text.placeholder"
          />
        </n-space>
      </div>
      <!-- 用来生成图片的DOM -->
      <div>
        <div class="content-copy" ref="codeDOM">
          <div class="copy-box">
            <div class="header">
              <div class="circle"></div>
              <div class="aside-right">
                <div class="code-class hljs">{{ codeClass }}</div>
              </div>
            </div>
            <div class="code-copy" v-show="!edit" ref="codeHtml">
              <highlightjs :autodetect="true" :code="content" />
            </div>
            <div class="websit-URL">codetietie.cn</div>
          </div>
        </div>
      </div>
      <div class="btn">
        <div class="edit-btn">
          <div class="btn-confirm" @click="confirmFunc" v-show="edit">
            {{ state.CN === 'Chinese' ? '确定' : 'Confirm' }}
          </div>
          <div class="btn-cancel" @click="cancelFunc" v-show="edit">
            {{ state.CN === 'Chinese' ? '取消' : 'Cancel' }}
          </div>
        </div>
        <div class="btn-edit" @click="editFunc" v-show="!edit">
          {{ state.text.shareCodeBtn }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, Ref, watch, h } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { addCodeStick, getCodeStick } from '../api/request.js';
import {
  NTooltip,
  NSpace,
  NInput,
  useMessage,
  NIcon,
  NSelect,
  NTag,
} from 'naive-ui';
import { ReceiptOutline } from '@vicons/ionicons5';
import { useState } from '../stores/state.js';
import domtoimage from 'dom-to-image';
import Drawer from './Drawer.vue';

const edit: Ref<boolean> = ref(false);
const content: Ref<string> = ref('');

const router = useRouter();
const route = useRoute();
var randomValue = ref('');

const textArea = ref();
// 点击“我也要分享代码”按钮之后
const state = useState();
const editContent = ref('');
function editFunc(): void {
  editContent.value = '';
  state.state = true;
  codeClass.value = '';
  edit.value = true;
  // textarea元素自动获取焦点
  nextTick(() => {
    textArea.value.focus();
  });
}

// 点击确认添加之后
const message = useMessage();
async function confirmFunc(): Promise<void> {
  if (!editContent.value) {
    // 提示不能分享空代码
    message.warning('输入代码不能为空~', {
      icon: () => h(NIcon, null, { default: () => h(ReceiptOutline) }),
    });
  } else {
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
    edit.value = false;
    const data = {
      randomValue: randomValue.value,
      editContent: editContent.value,
      dealLineTime: dealLineTime,
      burn: state.burn,
    };
    await addCodeStick(data);
    state.state = false;
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
    const currentTimeStamp = new Date();
    timeBar.value =
      ((res.data.data.timestamp_out - currentTimeStamp) /
        (res.data.data.timestamp_out - res.data.data.timestamp_in)) *
      100;
    content.value = res.data.data.content;
  }
}
// 更新代码类型查询
function getCodeClass() {
  codeClass.value =
    codeHtml.value.childNodes[0].childNodes[0].classList[1] || 'txt';
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
    getCodeClass(); // 更新代码类型
  }
);

// 选择代码文件
const selectCode = ref(null);
const selectOptions = ref([
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: 'song0',
  },
  {
    label: 'Drive My Car',
    value: 'song1',
  },
  {
    label: 'Norwegian Wood',
    value: 'song2',
  },
]);
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
// 一键复制代码
const copyStatus = ref('');
const showTooltip: Ref<boolean> = ref(false);
function copyCode() {
  const textarea = document.createElement('textarea');
  textarea.value = content.value;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  copyStatus.value = `${state.text.copySuccess}😎`;
  showTooltip.value = true;

  setTimeout(() => {
    showTooltip.value = false;
  }, 2000);
}

// 下载代码为图片
var codeDOM = ref(null);
function downloadImg() {
  domtoimage.toBlob(codeDOM.value).then(function (blob) {
    downloadBlob(blob, 'image.png');
  });
}
function downloadBlob(blob: Blob, fileName: string) {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
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
  min-width: 20vw;
  padding: 4.5rem;
  background-image: linear-gradient(to top right, #8720fd, #ffc832);
  position: relative;
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
}
.copy-box {
  height: 100%;
  width: calc(100% + 0.5px);
  border-radius: 12px;
  overflow: auto;
  background-color: #1e1e1e;
  box-shadow: 0px 20px 15px 5px rgba(34, 34, 36, 0.26);
  zoom: 2;
}
pre {
  margin: -1rem 0 0 0;
}
.websit-URL {
  font-family: Fira Code, sans-serif;
  font-weight: 700;
  color: rgba(220, 221, 225, 0.8);
  margin-right: 0.5rem;
  position: absolute;
  right: 0;
  bottom: 0;
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
  gap: 3.5rem;
}

.select {
  width: 10vw;
  margin-right: 1.2rem;
}
.select > .n-select {
  display: flex;
}
.n-base-selection {
  --n-color: red !important;
}
.circle {
  height: 11px;
  width: 11px;
  border-radius: 50%;
  background-color: #fdbc30;
  position: relative;
  left: 1.5rem;
}
.circle::before {
  content: '';
  position: absolute;
  left: -18px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  background-color: #fe6059;
}
.circle::after {
  content: '';
  position: absolute;
  left: 18px;
  height: 11px;
  width: 11px;
  border-radius: 50%;
  background-color: #28c840;
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
  height: 100%;
  min-height: 50vh;
  width: 50vw;
  min-width: 20rem;
  background-color: #f1f1f2;
}
.btn {
  position: absolute;
  bottom: 6vh;
  left: 50%;
  transform: translateX(-50%);
}
.edit-btn {
  display: flex;
  gap: 1.6rem;
}
.btn-confirm,
.btn-cancel,
.btn-edit {
  font-family: 'Browood-Regular', 'Luckiest_Guy';
  color: var(--btn-color);
  background-color: var(--btn-bg-color);
  height: 5vh;
  width: fit-content;
  text-align: center;
  line-height: 5vh;
  font-size: 1.05rem;
  padding: 0 1rem 0 1rem;
  border-radius: 2rem;
  cursor: pointer;
  border: 1.6px solid #000;
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
  .code-box {
    padding-bottom: 3rem;
  }
  .select {
    width: 20vw;
  }
}
</style>
<style></style>
