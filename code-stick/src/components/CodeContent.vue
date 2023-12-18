<template>
  <div class="container">
    <main>
      <div class="content">
        <div class="header">
          <div class="circle"></div>
          <span class="code-class">.{{ codeClass }}</span>
        </div>
        <div class="code" v-show="!edit" ref="codeHtml">
          <highlightjs language="Java" :autodetect="true" :code="editContent" />
        </div>
        <textarea
          v-show="edit"
          class="edit-box"
          v-model="editContent"
          ref="textArea"
        ></textarea>
      </div>
    </main>
    <div class="btn">
      <button class="btn-verify" @click="verifyFunc" v-show="edit">确定</button>
      <button class="btn-edit" @click="editFunc" v-show="!edit">
        我也要分享代码
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, Ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { addCodeStick, getCodeStick } from '../api/request.js';

const edit: Ref<boolean> = ref(false);
const editContent: Ref<string> = ref('');

const router = useRouter();
const route = useRoute();

const textArea = ref();
// 点击“我也要分享代码”按钮之后
function editFunc(): void {
  edit.value = true;
  editContent.value = '';
  // textarea元素自动获取焦点
  nextTick(() => {
    textArea.value.focus();
  });
}

// 确认添加代码
async function verifyFunc(): Promise<void> {
  var randomValue = Math.random().toString(36).substr(2); // 生成随机字符串
  router.push(randomValue);
  edit.value = false;
  const data = {
    randomValue: randomValue,
    editContent: editContent.value,
  };
  console.log(data);

  await addCodeStick(data);
  router.go(0);
}

const codeHtml = ref(); // 获取元素实例
const codeClass = ref(null); // 定义初始代码类型

// 拉取代码
async function getCode() {
  const res = await getCodeStick(route.params.randomValue);
  editContent.value = res.data.data;
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
    await getCode();
    getCodeClass(); // 更新代码类型
  }
);
</script>

<style scoped>
.container {
  height: 100vh;
  box-sizing: border-box;
  background-color: var(--bg-color);
  background-image: linear-gradient(
      90deg,
      var(--line-color) 3%,
      rgba(0, 0, 0, 0) 3%
    ),
    linear-gradient(360deg, var(--line-color) 3%, rgba(0, 0, 0, 0) 3%);
  background-size: 20px 20px;
  background-position: center center;
}
main {
  height: 100%;
  width: 80vw;
  position: relative;
  left: 17vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  height: fit-content;
  width: fit-content;
  /* width: 66vw; */
  max-height: 68vh;
  min-height: 20vh;
  min-width: 20vw;
  overflow: auto;
  box-sizing: border-box;
  background-color: #1e1e1e;
  border-radius: 1.2rem;
  transform: translateY(-6vh);
}
.header {
  color: #fff;
  height: 3rem;
  line-height: 3rem;
  padding-left: 1rem;
  background-color: #1e1e1e;
  display: flex;
  align-items: start;
}
.circle {
  height: 11px;
  width: 11px;
  border-radius: 50%;
  background-color: #fdbc30;
  position: relative;
  left: 1.5rem;
  top: 1.2rem;
  /* display: inline-block; */
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
.code-class {
  position: absolute;
  right: 18px;
  top: -2px;
}
.edit-box {
  height: 50vh;
  width: 100%;
  background-color: #f1f2f8;
  border: none;
}
.btn {
  position: absolute;
  bottom: 5rem;
  left: 57vw;
  transform: translateX(-50%);
}
.btn-verify,
.btn-edit {
  border: none;
  height: 5vh;
  line-height: 5vh;
  font-size: 1rem;
  cursor: pointer;
  padding: 0 1rem 0 1rem;
  background-color: #0a7fa5;
  border-radius: 2rem;
  color: #fff;
}
/* 设置滚动条的大小 */
.edit-box::-webkit-scrollbar,
.content::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.edit-box::-webkit-scrollbar-thumb,
.content::-webkit-scrollbar-thumb {
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.2);
}
.edit-box::-webkit-scrollbar-track,
.content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>
