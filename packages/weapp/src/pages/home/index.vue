<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-04-24 09:32:13
 * @LastEditTime: 2024-06-18 08:27:28
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\weapp\src\pages\home\index.vue
-->
<template>
  <view class="container">
    <!-- swiper -->
    <view class="card-swiper">
      <wd-swiper
        autoplay
        :current="4"
        custom-indicator-class="custom-indicator-class"
        custom-image-class="custom-image"
        custom-next-image-class="custom-image-prev"
        custom-prev-image-class="custom-image-prev"
        :indicator="{ type: 'dots' }"
        :list="imgsList"
        previousMargin="24px"
        nextMargin="24px"
        @click="onSwiperClick"
      ></wd-swiper>
    </view>

    <wd-divider color="#4D80F0" custom-class="my-20rpx">我的进度</wd-divider>
    <view class="w-710rpx mx-auto bg-#fff rounded-12rpx f-center py-40rpx">
      <wd-circle v-model="process" :text="`进度：${process}%`"></wd-circle>
    </view>

    <!-- 日历 -->
    <wd-divider color="#4D80F0" custom-class="my-20rpx">日历</wd-divider>
    <view class="w-710rpx mx-auto bg-#fff rounded-12rpx pu-20rpx">
      <wd-calendar-view
        :min-date="Date.now()"
        v-model="currentDataStand"
        @change="handleChange"
      />
    </view>

    <!-- 星座运势 -->
    <!-- <wd-divider color="#4D80F0" custom-class="my-20rpx">星座运势</wd-divider>
    <Horoscope /> -->
  </view>
</template>

<script lang="ts" setup>
import Horoscope from './components/Horoscope.vue'
// swiper start
const imgsList = [
  'https://3k2j857423.goho.co/static/w2.jpg',
  'https://3k2j857423.goho.co/static/li.jpg'
]
const onSwiperClick = (data: { index: number }) => {
  uni.previewImage({
    current: data.index,
    urls: imgsList
  })
}
// swiper end

const process = ref(60)

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
.card-swiper {
  --wot-swiper-radius: 0;
  --wot-swiper-item-padding: 0 24rpx;
  --wot-swiper-nav-dot-color: #e7e7e7;
  --wot-swiper-nav-dot-active-color: #4d80f0;
  padding-bottom: 24rpx;
  :deep(.custom-indicator-class) {
    bottom: -16px;
  }
  :deep(.custom-image) {
    border-radius: 12rpx;
  }
  :deep(.custom-image-prev) {
    height: 168px !important;
  }
}
</style>
