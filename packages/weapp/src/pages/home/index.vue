<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-04-24 09:32:13
 * @LastEditTime: 2024-05-24 16:30:23
 * @LastEditors: June
 * @FilePath: \mine_weapp\src\pages\home\index.vue
-->
<template>
  <view class="container">
    <!-- 星座运势 -->
    <Horoscope />
  </view>
</template>

<script lang="ts" setup>
import Horoscope from './components/Horoscope.vue'
const imgsList = [
  {
    id: 1,
    src: 'https://env-00jxgnbpjqmg.normal.cloudstatic.cn/fs.jpg?expire_at=1716543113&er_sign=63f6a54ead424bc20e29101742b52eee'
  }
]
</script>
