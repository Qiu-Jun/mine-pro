<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-05-24 13:46:22
 * @LastEditTime: 2024-05-28 13:52:32
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\weapp\src\pagesA\car\index.vue
-->
<template>
  <view class="container f-center flex-col">
    <view class="text-center">车主信息</view>
    <view class="my-20rpx">车牌号: {{ carCode }}</view>

    <view
      v-if="phone"
      class="bg-[var(--primary-color)] text-#fff rounded-12rpx py-10rpx px-20rpx"
      @click="handleCallMe"
    >
      联系车主
    </view>
  </view>
</template>

<script lang="ts" setup>
import { queryParse } from '@/utils/common'
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
  const scene: any = decodeURIComponent(query.scene)
  if (scene) {
    const sceneData = queryParse(`?${scene}`)

    carCode.value = `粤${sceneData.car}`
    phone.value = sceneData.phone
  }
})
</script>
