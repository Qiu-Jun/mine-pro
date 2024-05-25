<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-05-24 13:46:22
 * @LastEditTime: 2024-05-24 13:55:05
 * @LastEditors: June
 * @FilePath: \mine_weapp\src\pagesA\car\index.vue
-->
<template>
  <view class="container f-center flex-col">
    <view class="text-center">车主信息</view>
    <view>车牌号: {{ carCode }}</view>
    <view
      v-if="phone"
      class="w-120rpx h-48rpx bg-[var(--primary-color)] text-#fff"
      @click="handleCallMe"
    >
      联系车主
    </view>
  </view>
</template>

<script lang="ts" setup>
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

onLoad((query) => {
  console.log(query)
  carCode.value = `粤${query.car}`
  phone.value = query.phone
  // scene 需要使用 decodeURIComponent 才能获取到生成二维码时传入的 scene
  // const scene = decodeURIComponent(query.scene)
})
</script>
