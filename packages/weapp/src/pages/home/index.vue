<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-04-24 09:32:13
 * @LastEditTime: 2024-06-19 15:01:03
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\weapp\src\pages\home\index.vue
-->
<template>
  <view class="container bg-grid">
    <!-- 星座运势 -->
    <!-- <wd-divider color="#4D80F0" custom-class="my-20rpx">星座运势</wd-divider>
    <Horoscope /> -->
  
  </view>
</template>

<script lang="ts" setup>
import { App, Rect } from '@leafer-ui/miniapp'
import { useAppStore } from '@/store/index'
// import Horoscope from './components/Horoscope.vue'

const appStore = useAppStore()
</script>

<style lang="scss" scoped>

</style>
