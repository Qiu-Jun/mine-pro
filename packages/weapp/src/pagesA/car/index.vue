<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-05-24 13:46:22
 * @LastEditTime: 2024-06-03 09:19:09
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\weapp\src\pagesA\car\index.vue
-->
<template>
  <view class="container f-center flex-col cool-background">
    <view class="text-center">车主信息</view>
    <view class="my-20rpx">车牌号: {{ carCode }}</view>

    <wd-button v-if="phone" @click="handleCallMe">联系车主</wd-button>
  </view>
</template>

<script lang="ts" setup>
// import { queryParse } from '@/utils/common'
import carData from './carData'

const phone = ref('')
const carCode = ref('')

const handleCallMe = () => {
  const _phone = unref(phone)
  if (!_phone) return
  uni.showModal({
    title: '提示',
    content: '您确定通过虚拟拨号呼叫车主吗？',
    success: (res) => {
      res.confirm &&
        uni.makePhoneCall({
          phoneNumber: _phone
        })
      console.log(res)
    }
  })
}

onLoad((query: any) => {
  // console.log(query)

  // scene 需要使用 decodeURIComponent 才能获取到生成二维码时传入的 scene
  console.log(query)
  const scene: string | undefined | null = decodeURIComponent(query.scene)
  if (scene) {
    // const sceneData = queryParse(`?${scene}`) as any
    const carItem = scene ? carData[scene] : null
    if (carItem) {
      carCode.value = carItem.carCode
      phone.value = carItem.phone
    }
  }
})
</script>

<style lang="scss" scoped>
.cool-background {
  background-image: linear-gradient(45deg, #ff9a9e, #fad0c4, #fad0c4, #ff9a9e);
  background-size: 400%;
  animation: bg-animation 15s linear infinite;
}

@keyframes bg-animation {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 400% 0;
  }
}
</style>
