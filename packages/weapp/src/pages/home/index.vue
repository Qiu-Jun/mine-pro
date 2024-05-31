<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-04-24 09:32:13
 * @LastEditTime: 2024-05-31 09:58:27
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\weapp\src\pages\home\index.vue
-->
<template>
  <view class="container">
    <!-- swiper -->
    <swiper
      class="w-750rpx h-400rpx swiper-wrap"
      indicator-dots
      autoplay
      circular
      previous-margin="40rpx"
      next-margin="40rpx"
    >
      <swiper-item v-for="(img, idx) in imgsList" :key="img.id">
        <image
          class="w-full h-full"
          mode="scaleToFill"
          :src="img.src"
          :data-idx="idx"
        />
      </swiper-item>
    </swiper>

    <!-- 星座运势 -->
    <Horoscope />

    <!-- 日历 -->
    <view class="w-710rpx mx-auto bg-#fff rounded-12rpx mt-20rpx">
      <view class="flex justify-end items-center py-20rpx">
        <wd-button type="primary" @click="handleCalendarDetail"
          >查看选中日期黄历</wd-button
        >
      </view>
      <wd-calendar-view
        :min-date="Date.now()"
        v-model="currentDataStand"
        @change="handleChange"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
import Horoscope from './components/Horoscope.vue'
const imgsList = [
  {
    id: 1,
    src: 'https://3k2j857423.goho.co/uploads/w1.jpg'
  },
  {
    id: 2,
    src: 'https://3k2j857423.goho.co/uploads/w2.jpg'
  },
  {
    id: 3,
    src: 'https://3k2j857423.goho.co/uploads/fs.jpg'
  },
  {
    id: 4,
    src: 'https://3k2j857423.goho.co/uploads/li.jpg'
  }
]
// const current = ref(0)
// const onSwiperChange = (e: UniHelper.SwiperOnChangeEvent) => {
//   current.value = e.detail.current
// }

const currentDataStand = ref(Date.now())

function handleChange({ value }: { value: number }) {
  currentDataStand.value = value
}

const handleCalendarDetail = () => {
  const _currentDataStand = unref(currentDataStand)
  _currentDataStand &&
    uni.navigateTo({
      url: `/pagesA/calendar/index?current=${_currentDataStand}`
    })
}
</script>

<style lang="scss" scoped>
.swiper-wrap {
  .active {
    transform: scale(1.14) !important;
    transition: all 0.2s ease-in 0s;
  }
}
</style>
