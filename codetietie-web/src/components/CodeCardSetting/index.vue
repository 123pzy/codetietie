<template>
  <div class="code-card-setting">
    <Selector valueIndex="currentCodeTheme" optionsIndex="codeThemeTeam" :placeholder="$t('selectCodeTheme')" updateValueIndex="funcTest"
      ><span class="select-code-theme-title">{{
        $t('selectCodeThemeTitle')
      }}</span></Selector
    >
  </div>
</template>

<script lang="ts" setup>
import Selector from '@/components/Selector/index.vue';
</script>

<style scoped>
.select-code-theme-title {
  display: block;
  color: var(--font-color);
}
</style>
