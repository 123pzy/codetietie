<template>
  <div
    class="code-header-container"
    :style="{
      backgroundColor: backgroundColor,
    }"
  >
    <div class="code-header-left">
      <!-- Mac风格 -->
      <div class="mac-style-box">
        <div class="red"></div>
        <div class="yellow" @click="props.toSmall"></div>
        <div class="green" @click="props.toBig"></div>
      </div>
      <div class="before-edit" v-if="!editStatus">
        <!-- 代码文件选择 -->
        <Selector
          valueIndex="selectedCodeTitle"
          optionsIndex="codeContentTeam"
          :placeholder="$t('selectCodeFile')"
          updateValueIndex="changeCodeContent"
        ></Selector>
        <!-- “+” -->
        <div class="add-code-file-btn" v-if="path">
          <n-icon size="25" style="cursor: pointer" @click="addCodeFile">
            <Add />
          </n-icon>
        </div>
      </div>
      <div v-else>
        <CodeSettings class="code-settings"></CodeSettings>
      </div>
    </div>
    <div class="code-header-right">
      <div class="btn-team" v-if="!editStatus">
        <n-space class="icon-team">
          <!-- 下载为图片按钮 -->
          <n-tooltip placement="top" trigger="hover">
            <template #trigger>
              <img
                src="@/assets/download-image.svg"
                class="download-img-icon"
                @click="downloadCodeToImg"
              />
            </template>
            {{ $t('downPNG') }}
          </n-tooltip>
          <!-- 复制代码 -->
          <n-tooltip placement="top" trigger="click" v-model:show="showTooltip">
            <template #trigger>
              <img
                src="@/assets/copyIcon.svg"
                class="copy-icon"
                @click="copyCode"
              />
            </template>
            {{ t('copySuccess') }}
          </n-tooltip>
        </n-space>
      </div>
      <div class="code-language" v-show="!editStatus">
        {{ languageNames[currentCodeLanguage as LanguageName] }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, watch } from 'vue';
import { NSpace, NIcon, NTooltip } from 'naive-ui';
import { Add } from '@vicons/ionicons5';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';
import { useState } from '@/stores/state';
import { useRoute, useRouter } from 'vue-router';
import { getCodeStick } from '@/api/request.ts';
import { onMounted } from 'vue';
import { languageNames } from '@/themes/language-names';
import { LanguageName } from '@uiw/codemirror-extensions-langs';
import CodeSettings from '@/components/CodeSettings/index.vue';
import Selector from '@/components/Selector/index.vue';

const route = useRoute();
const router = useRouter();
const path = ref(route.params.randomValue == 'codetietie' ? false : true);
const { t } = useI18n();
const state = useState();
const {
  currentCode,
  currentCodeLanguage,
  editStatus,
  codeContentTeam,
  addStatus,
  downloadToImgDOM,
  randomValue,
  datePickerDisabled,
  currentCodeTheme,
  backgroundColor,
  currentURL,
} = storeToRefs(state);
const props = defineProps(['toBig', 'toSmall']);
watch(currentCodeTheme, () => {
  localStorage.setItem('code-theme', currentCodeTheme.value as string);
});

// 添加代码段
function addCodeFile() {
  datePickerDisabled.value = true;
  state.toEditStatus();
  addStatus.value = false;
}
// 下载为图片
function downloadCodeToImg() {
  currentURL.value = location.href;
  downloadToImgDOM.value = !downloadToImgDOM.value;
}

// 复制当前代码
const showTooltip: Ref<boolean> = ref(false);
function copyCode() {
  state.copyFunc(currentCode.value);
  showTooltip.value = true;
  setTimeout(() => {
    showTooltip.value = false;
  }, 2000);
}

// 拉取代码
const timeBar = ref(52);
async function getCode() {
  const res = await getCodeStick(route.params.randomValue);
  if (res.data.code === 0) {
    router.push('/not_found');
  } else if (res.data.code === -1) {
    timeBar.value = 0;
    codeContentTeam.value = res.data.data;
    currentCode.value = codeContentTeam.value[0].value;
    currentCodeLanguage.value = codeContentTeam.value[0].language;
  } else {
    // 计算代码剩余电量
    const currentTimeStamp = new Date().getTime();
    timeBar.value =
      ((res.data.data.timestamp_out - currentTimeStamp) /
        (res.data.data.timestamp_out - res.data.data.timestamp_in)) *
      100;
    codeContentTeam.value = JSON.parse(res.data.data.selectOptions);
    currentCode.value = codeContentTeam.value[0].value;
    currentCodeLanguage.value = codeContentTeam.value[0].language;
  }
}

// 最大化code-card
// 动态路由参数变化时重新拉取代码并更新代码类型
watch(
  () => route.params,
  async () => {
    if (route.params.randomValue !== randomValue.value) {
      await getCode();
    }
    currentURL.value = location.href;
    randomValue.value = '';
    path.value = route.params.randomValue == 'codetietie' ? false : true;
    // getCodeClass(); // 更新代码类型
  }
);
onMounted(async () => {
  await getCode();
});
</script>

<style lang="less" scoped>
.code-header-container {
  height: 2.9rem;
  width: 100%;
  box-sizing: border-box;
  // background-color: #1e1e1e;
  display: flex;
  justify-content: space-between;
  border-radius: 15px 15px 0 0;
}
.code-header-left {
  height: 100%;
  display: flex;
  align-items: center;
}
.before-edit {
  height: 100%;
  width: 12vw;
  min-width: 6rem;
  display: flex;
  align-items: center;
}
.mac-style-box {
  color: #1e1e1e;
  height: 1rem;
  display: flex;
  align-items: center;
  gap: 0.66rem;
  padding-left: 0.8rem;
  padding-right: 0.9rem;
}
.circle(@bgColor) {
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: @bgColor;
}
.red {
  .circle(#de4243);
}
.yellow {
  .circle(#e69e2a);
}
.green {
  .circle(#11a73e);
}
.circle-before(@content) {
  content: @content;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.red:hover::before {
  .circle-before('×');
}
.yellow:hover::before {
  .circle-before('－');
}
.green:hover::before {
  .circle-before('+';);
}
.select-code {
  display: flex;
  gap: 0.3rem;
  width: 100%;
  margin-right: 0.3rem;
}
.add-code-file-btn {
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f2f0;
  border-radius: 5px;
  padding-left: 2px;
  padding-right: 2px;
  margin-left: 5px;
  // &:hover {
  //   background-color: #292929;
  // }
}
.code-header-right {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-left: 1.5rem;
  padding-right: 0.5rem;
}
.btn-team {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.icon-team {
  flex-flow: nowrap !important;
  position: relative;
  top: 0.16rem;
}
.copy-icon {
  height: 1.21rem;
  cursor: pointer;
}
.download-img-icon {
  height: 1.16rem;
  cursor: pointer;
}
.code-language {
  color: #f1f2f0;
  margin-right: 0.5rem;
}
.read-burn-icon {
  height: 1rem;
}
@media (max-width: 768px) {
  .code-settings {
    display: none;
  }
}
</style>
