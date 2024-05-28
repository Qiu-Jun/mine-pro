<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-05-28 08:56:19
 * @LastEditTime: 2024-05-28 11:31:48
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\weapp\src\pages\home\components\Horoscope.vue
-->
<template>
  <view class="w-710rpx bg-#fff mx-auto">
    <view class="ml-20rpx pt-10px">星座运势</view>
    <view
      class="w-full flex justify-start items-center flex-wrap box-border p-20rpx"
    >
      <view
        class="w-98rpx mr-16rpx img-item"
        :class="{ 'mt-10rpx': idx > 5 }"
        v-for="(item, idx) in list"
        :key="item.id"
        @click="handleNav(item)"
      >
        <image
          class="w-98rpx h-98rpx rounded-12rpx"
          lazy-load
          mode="aspectFit"
          :src="item.src"
        />
        <view
          class="w-full text-center text-24rpx mb-10rpx text-[var(--primary-color)]"
          >{{ item.name }}</view
        >
        <view class="text-18rpx text-center">{{ item.desc }}</view>
      </view>
    </view>
  </view>
</template>

<script name="Horoscope" lang="ts" setup>
import { xzList as list } from '@/constants'
import type { xzType } from '@/constants'

const handleNav = (item: xzType) => {
  console.log(item)
  if (!item) return
  uni.navigateTo({
    url: `/pagesA/horoscope/index?name=${item.name}&bg=${item.src}`
  })
}
</script>

<style lang="scss" scoped>
.img-item {
  &:nth-child(6n) {
    margin-right: 0;
  }
}
</style>
