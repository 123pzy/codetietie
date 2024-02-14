<template>
  <div class="header-container">
    <div class="websit-name" @click="goHomePage">
      <img src="@/assets/logo.svg" alt="" style="height: 2rem" />
      {{ $t('website_title') }}
    </div>
    <div class="btn-team">
      <div class="theme-shift-btn" @click="changeTheme">
        <n-dropdown
          trigger="click"
          :options="themeOptions"
          :show-arrow="true"
          @select="handleSelectTheme"
        >
          <!--           :node-props="generateOptionProps"
          :menu-props="menuPropsStyle" -->
          <div style="height: 100%; display: flex; align-items: center">
            <img
              src="@/assets/skin-switch-dark.svg"
              v-show="state.theme == 'dark'"
              style="height: 80%"
            />
            <img
              src="@/assets/skin-switch-light.svg"
              v-show="state.theme !== 'dark'"
              style="height: 80%"
            />
          </div>
        </n-dropdown>
      </div>
      <div class="lang-shift-btn" @click="changeLang">
        <img
          src="@/assets/chinese-dark.svg"
          v-show="state.theme == 'dark'"
          style="height: 80%"
        />
        <img
          src="@/assets/chinese-light.svg"
          v-show="state.theme !== 'dark'"
          style="height: 80%"
        />
      </div>
      <div class="custom-btn" @click="activate">
        <n-tooltip placement="bottom" trigger="hover">
          <template #trigger>
            <n-icon size="30">
              <img
                src="@/assets/custom-dark.svg"
                v-show="state.theme == 'dark'"
                alt=""
                style="height: 80%"
              />
              <img
                src="@/assets/custom-light.svg"
                v-show="state.theme !== 'dark'"
                alt=""
                style="height: 80%"
              />
            </n-icon>
          </template>
          <span> {{ $t('Custom') }} </span>
        </n-tooltip>
        <HeaderDrawer></HeaderDrawer>
      </div>
      <div class="coffee-btn" @click="openMyByuMecoffee">
        <n-tooltip placement="bottom" trigger="hover">
          <template #trigger>
            <n-icon size="30">
              <img
                src="@/assets/coffee-dark.svg"
                v-show="state.theme == 'dark'"
                alt=""
                style="height: 80%"
              />
              <img
                src="@/assets/coffee-light.svg"
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
import { useState } from '@/stores/state';
import { useI18n } from 'vue-i18n';
import HeaderDrawer from './HeaderDrawer.vue';

const state = useState();
defineProps(['name_distance', 'btn_distance']);
// 点击图标跳转index页面
function goHomePage() {
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

// 假设 theme 和 state 已经在函数外定义
let handleSelectTheme: (key: 'system' | 'dark' | 'light') => void = (key) => {
  theme.value = key;
  localStorage.setItem('theme', theme.value);

  if (key === 'system') {
    followSystemTheme();
    prefers.addEventListener('change', followSystemTheme);
  } else {
    changeStateTheme();
    state.theme = theme.value;
    prefers.removeEventListener('change', followSystemTheme);
  }
};

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
// // 设置下拉菜单样式
// function generateOptionProps() {
//   return {
//     style: {
//       '--n-option-text-color': 'var(--dropdown-font-color)',
//       '--n-font-size': '0.86rem',
//       'background-color': 'var(--dropdown-bg-color)',
//       '--n-option-color-hover': 'var(--dropdown-option-color)',
//     },
//   };
// }
// function menuPropsStyle() {
//   return {
//     style: {
//       'font-size': '0.8rem',
//       'background-color': 'var(--dropdown-bg-color)',
//       '--n-color': 'var(--dropdown-allow-color)',
//     },
//   };
// }
// 抽屉
const activate = () => {
  state.customStatus = true;
};
// 切换中英文
const { locale } = useI18n();
function changeLang() {
  locale.value = locale.value == 'zh' ? 'en-US' : 'zh';
  localStorage.setItem('CN', locale.value);
}

// 跳转到我的Buy me a coffee
function openMyByuMecoffee() {
  window.open('https://www.buymeacoffee.com/123pzy');
}
</script>

<style scoped>
.websit-name {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-family: 'Luckiest_Guy', 'Browood-Regular';
  letter-spacing: 1px;
  font-size: 1.45rem;
  color: var(--websit-name-bg);
  position: absolute;
  top: 0.5rem;
  left: v-bind(name_distance + 'vw');
  cursor: pointer;
}
.btn-team {
  height: 50px;
  position: absolute;
  top: 0.5rem;
  right: v-bind(btn_distance + 'vw');
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
}
.theme-shift-btn,
.lang-shift-btn,
.custom-btn,
.coffee-btn {
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.lang-shift-btn {
  display: flex;
  align-items: end;
}
@media (max-width: 768px) {
  .websit-name {
    left: 0.8rem;
  }
  .btn-team {
    right: 0.8rem;
  }
}
</style>
