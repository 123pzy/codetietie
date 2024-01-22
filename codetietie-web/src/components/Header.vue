<template>
  <div class="header-container">
    <div class="websit-name" @click="goHome">
      <img
        src="../assets/logo.svg"
        alt=""
        style="height: 2rem; transform: translateY(2.8px)"
      />
      {{ $t('website_title') }}
    </div>
    <div class="btn">
      <div class="theme-box" @click="changeTheme">
        <n-dropdown
          trigger="click"
          :options="themeOptions"
          :show-arrow="true"
          @select="handleSelectTheme"
          :node-props="generateOptionProps"
          :menu-props="menuPropsStyle"
        >
          <div style="height: 100%; display: flex; align-items: center">
            <img
              src="../assets/skin-switch-dark.svg"
              v-show="state.theme == 'dark'"
              style="height: 80%"
            />
            <img
              src="../assets/skin-switch-light.svg"
              v-show="state.theme !== 'dark'"
              style="height: 80%"
            />
          </div>
        </n-dropdown>
      </div>
      <div class="CN-shift" @click="changeCN">
        <img
          src="../assets/chinese-dark.svg"
          v-show="state.theme == 'dark'"
          style="height: 80%"
        />
        <img
          src="../assets/chinese-light.svg"
          v-show="state.theme !== 'dark'"
          style="height: 80%"
        />
      </div>
      <div class="github-icon" @click="openMyGithub">
        <n-tooltip placement="bottom" trigger="hover">
          <template #trigger>
            <n-icon size="30">
              <img
                src="../assets/github-dark.svg"
                v-show="state.theme == 'dark'"
                alt=""
                style="height: 80%"
              />
              <img
                src="../assets/github-light.svg"
                v-show="state.theme !== 'dark'"
                alt=""
                style="height: 80%"
              />
            </n-icon>
          </template>
          <span> {{ $t('Github') }} </span>
        </n-tooltip>
      </div>
      <div class="coffee-icon" @click="openMyByuMecoffee">
        <n-tooltip placement="bottom" trigger="hover">
          <template #trigger>
            <n-icon size="30">
              <img
                src="../assets/coffee-dark.svg"
                v-show="state.theme == 'dark'"
                alt=""
                style="height: 80%"
              />
              <img
                src="../assets/coffee-light.svg"
                v-show="state.theme !== 'dark'"
                alt=""
                style="height: 80%"
              />
            </n-icon>
          </template>
          <span>{{ $t('BuyMeACoffee') }}</span>
        </n-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect, h } from 'vue';
import { NTooltip, NIcon, NDropdown } from 'naive-ui';
import { SunnyOutline, MoonOutline, TvOutline } from '@vicons/ionicons5';
import { useState } from '../stores/state';
import { useI18n } from 'vue-i18n';

const state = useState();
defineProps(['name_distance', 'btn_distance']);
// 点击图标跳转index页面
function goHome() {
  window.location.href = '/';
}
// 切换主题
const themeOptions = ref([
  {
    label: '浅色',
    icon() {
      return h(NIcon, null, {
        default: () => h(SunnyOutline),
      });
    },
    key: 'light',
  },
  {
    label: '深色',
    icon() {
      return h(NIcon, null, {
        default: () => h(MoonOutline),
      });
    },
    key: 'dark',
  },
  {
    label: '跟随系统',
    icon() {
      return h(NIcon, null, {
        default: () => h(TvOutline),
      });
    },
    key: 'system',
  },
]);
// 初始主题
var theme = ref(localStorage.getItem('theme') || 'system');
// 跟随系统改变颜色
const prefers = matchMedia('(prefers-color-scheme: dark)'); // 使用媒介查询获取当前系统颜色
function changeStateTheme() {
  document.documentElement.dataset.theme = state.theme;
}
function followSystemTheme() {
  state.theme = prefers.matches ? 'dark' : 'light';
  changeStateTheme();
}

function handleSelectTheme(key) {
  if (key === 'system') {
    theme.value = key;
    localStorage.setItem('theme', theme.value);
    followSystemTheme();
    prefers.addEventListener('change', followSystemTheme);
  } else {
    theme.value = key;
    changeStateTheme();
    localStorage.setItem('theme', theme.value);
    state.theme = theme.value;
    prefers.removeEventListener('change', followSystemTheme);
  }
}
// 切换主题
function changeTheme() {}
// 主题切换后调用
watchEffect(() => {
  if (theme.value === 'system') {
    followSystemTheme();
    prefers.addEventListener('change', followSystemTheme);
  } else {
    state.theme = theme.value;
    changeStateTheme();
  }
});
// 设置下拉菜单样式
function generateOptionProps() {
  return {
    style: {
      '--n-option-text-color': 'var(--dropdown-font-color)',
      '--n-font-size': '0.86rem',
      'background-color': 'var(--dropdown-bg-color)',
      '--n-option-color-hover': 'var(--dropdown-option-color)',
    },
  };
}
function menuPropsStyle() {
  return {
    style: {
      'font-size': '0.8rem',
      'background-color': 'var(--dropdown-bg-color)',
      '--n-color': 'var(--dropdown-allow-color)',
    },
  };
}

// 切换中英文
const { locale } = useI18n();
function changeCN() {
  locale.value = locale.value == 'zh' ? 'en' : 'zh';
  localStorage.setItem('CN', locale.value);
}
// 跳转到我的GitHub
function openMyGithub() {
  window.open('https://github.com/123pzy/codetietie');
}
// 跳转到我的Buy me a coffee
function openMyByuMecoffee() {
  window.open('https://www.buymeacoffee.com/123pzy');
}
</script>

<style scoped>
.websit-name {
  display: flex;
  justify-content: center;
  gap: 5px;
  font-family: 'Luckiest_Guy', 'Browood-Regular';
  letter-spacing: 1px;
  font-size: 1.45rem;
  color: var(--websit-name-bg);
  position: absolute;
  top: 2vh;
  left: v-bind(name_distance + 'vw');
  z-index: 999;
  cursor: pointer;
}
.btn {
  height: 50px;
  width: 200px;
  position: absolute;
  top: 0.29rem;
  right: v-bind(btn_distance + 'vw');
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
}
.theme-box,
.CN-shift,
.github-icon,
.coffee-icon {
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.CN-shift {
  display: flex;
  align-items: end;
}
</style>
