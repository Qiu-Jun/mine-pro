<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-05-28 09:43:05
 * @LastEditTime: 2024-05-28 13:59:28
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\weapp\src\pagesA\horoscope\index.vue
-->
<template>
  <view class="container">
    <image class="w-full mb-20rpx" v-if="bgSrc" :src="bgSrc" mode="widthFix" />

    <view
      class="w-710rpx bg-#fff rounded-12rpx mx-auto box-border p-20rpx mb-20rpx"
      v-if="detail.length > 0"
    >
      <view
        class="w-full flex justify-between items-start"
        v-for="(item, idx) in detail"
        :key="idx"
      >
        <view
          class="basis-120rpx flex-grow-0 flex-shrink-0 mr-10rpx mb-10rpx"
          >{{ item.type }}</view
        >
        <view class="flex-1">{{ item.content }}</view>
      </view>
    </view>

    <view
      class="w-710rpx bg-#fff rounded-12rpx mx-auto box-border p-20rpx mb-40rpx"
      v-if="matchDetail"
    >
      <view class="text-center mb-20rpx text-amber text-20rpx">
        {{ matchDetail.grade }}
      </view>
      <view class="indent-48rpx">{{ matchDetail.content }}</view>
    </view>

    <label
      for="match"
      class="fixed right-20rpx bottom-120rpx z-1 bg-[var(--primary-color)] text-#fff w-98rpx h-98rpx text-center leading-30rpx box-border p-20rpx rounded-50%"
      >星座匹配</label
    >
  </view>

  <picker
    header-text="选择你想匹配的星座"
    :range="xzList"
    range-key="name"
    :value="curValue"
    @change="onPickerChange"
  >
    <button id="match"></button>
  </picker>
</template>

<script lang="ts" setup>
import { xzList } from '@/constants'
import type { xzType } from '@/constants'
import { fortune, matchYou } from '@/apis/tianxing'

const bgSrc = ref('')
const xzName = ref('')
const detail = ref<{ type: string; content: string }[]>([])
const matchDetail = ref<{
  content: string
  grade: string
  title: string
} | null>(null)
const getFortune = () => {
  const name = unref(xzName)
  if (!name) return
  fortune(name).then(({ data }: any) => {
    if (data) {
      detail.value = data.list
    }
  })
}

const curValue = ref(0)
console.log(xzList)
const onPickerChange = (e: Glo.AnyObject) => {
  const idx = e.detail.value
  const item: xzType = xzList[idx]
  console.log(item)
  matchYou({
    me: unref(xzName).replace('座', ''),
    he: item.name.replace('座', '')
  }).then(({ data }: any) => {
    data && (matchDetail.value = data)
  })
}

onLoad((ops) => {
  const { name = '', bg = '' } = ops as { name?: string; bg?: string }
  name &&
    uni.setNavigationBarTitle({
      title: name || '星座运势'
    })
  xzName.value = name
  bgSrc.value = bg
  getFortune()
})

onPullDownRefresh(() => {
  getFortune()
  uni.stopPullDownRefresh()
})
</script>
