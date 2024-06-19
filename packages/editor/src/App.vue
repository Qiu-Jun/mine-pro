<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-06-19 10:17:02
 * @LastEditTime: 2024-06-19 14:52:27
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\editor\src\App.vue
-->
<script setup lang="ts">
import { updateMpWx } from '@/utils/update'
import { useAppStore } from '@/store'

const appStore = useAppStore()

onLaunch(async () => {
  const systemInfo = uni.getSystemInfoSync()
  appStore.setSystemInfo(systemInfo)
  // console.log(appStore.systemInfo)
  // #ifdef MP-WEIXIN
  // 第三方时使用
  // const extJson = await uni.getExtConfigSync()
  // console.log(extJson)
  // #endif
})
onShow(() => {
  console.log('App Show')
  // #ifdef MP-WEIXIN
  updateMpWx()
  // #endif
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style></style>
