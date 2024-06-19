<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-04-24 09:32:13
 * @LastEditTime: 2024-06-19 16:03:55
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\editor\src\pages\home\index.vue
-->
<template>
  <div class="container bg-grid" id="wrapper">
    <!-- 编辑器 -->
    <div class="w-full h-100vh overflow-hidden">
      <Editor />
    </div>

    <!-- 操作栏 -->
    <div class="absolute left-0 right-0 bottom-0 z-10 bg-#fff h-52px f-center operation-box pb-[var(--safe-bottom)]">操作栏</div>
  </div>
</template>

<script lang="ts" setup>
import Editor from '@/components/Editor/index.vue'

</script>

<style lang="scss" scoped>
.bg-grid {
  --offsetX: 0px;
  --offsetY: 0px;
  --size: 10px;
  --color: #dedcdc;
  background-image: 
    linear-gradient(45deg, var(--color) 25%, transparent 0, transparent 75%, var(--color) 0), 
    linear-gradient(45deg, var(--color) 25%, transparent 0, transparent 75%, var(--color) 0);
  background-position: var(--offsetX) var(--offsetY), calc(var(--size) + var(--offsetX)) calc(var(--size) + var(--offsetY));
  background-size: calc(var(--size) * 2) calc(var(--size) * 2);
}
.operation-box {
  border-radius: 24rpx 24rpx  0 0;
}
</style>
