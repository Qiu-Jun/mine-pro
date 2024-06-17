<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-05-27 16:25:57
 * @LastEditTime: 2024-06-17 09:53:37
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\admin\src\layout\logo\index.vue
-->
<template>
  <div class="logo">
    <img src="@/assets/images/logo.png" alt="" />
    <h2 v-show="!collapsed" class="title">{{ globalEnv.title }}</h2>
  </div>
</template>

<script setup>
  import {globalEnv} from '@/constants/env'
  defineProps({
    collapsed: {
      type: Boolean,
    },
  });
</script>

<style lang="less" scoped>
  .logo {
    @apply flex overflow-hidden whitespace-nowrap items-center;

    height: 64px;
    padding-left: 24px;
    line-height: 64px;

    img {
      height: 32px;
      margin-right: 8px;
    }

    .title {
      @apply mb-0 text-xl;

      color: var(--app-primary-color);
    }
  }
</style>
