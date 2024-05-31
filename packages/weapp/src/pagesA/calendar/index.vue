<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-05-31 09:40:58
 * @LastEditTime: 2024-05-31 10:45:27
 * @LastEditors: June
 * @FilePath: \mine-pro\packages\weapp\src\pagesA\Calendar\index.vue
-->
<template>
  <view class="container pt-20rpx">
    <template v-if="dateDetail">
      <wd-cell-group title="当前日期" :value="dateDetail.gregoriandate">
        <wd-cell
          title="公历节日"
          v-if="dateDetail.festival"
          :value="dateDetail.festival"
        />
        <wd-cell title="农历" :value="dateDetail.lunardate" />
        <wd-cell
          title="农历节日"
          v-if="dateDetail.lunar_festival"
          :value="dateDetail.lunar_festival"
        />
        <wd-cell title="适宜" label="" :value="dateDetail.fitness" />
        <wd-cell title="不宜" label="" :value="dateDetail.taboo" />
        <wd-cell title="神位" :value="dateDetail.shenwei" />
        <wd-cell title="胎神" :value="dateDetail.taishen" />
        <wd-cell title="冲煞" :value="dateDetail.chongsha" />
        <wd-cell title="岁煞" :value="dateDetail.suisha" />
      </wd-cell-group>

      <wd-cell-group title="天干地支">
        <wd-cell title="五行甲子" :value="dateDetail.wuxingjiazi" />
        <wd-cell title="五行年" :value="dateDetail.wuxingnayear" />
        <wd-cell title="五行月" :value="dateDetail.wuxingnamonth" />
        <wd-cell title="星宿" :value="dateDetail.xingsu" />
        <wd-cell title="彭祖" :value="dateDetail.pengzu" />
        <wd-cell title="见神" :value="dateDetail.jianshen" />
        <wd-cell title="天干地支年" :value="dateDetail.tiangandizhiyear" />
        <wd-cell title="天干地支月" :value="dateDetail.tiangandizhimonth" />
        <wd-cell title="天干地支日" :value="dateDetail.tiangandizhiday" />

        <wd-cell title="季节" :value="dateDetail.lmonthname" />
        <wd-cell title="生肖" :value="dateDetail.shengxiao" />
        <wd-cell title="农历月" :value="dateDetail.lubarmonth" />
        <wd-cell title="农历日" :value="dateDetail.lunarday" />
      </wd-cell-group>
    </template>
    <template v-else>
      <wd-status-tip image="content" tip="暂无内容" />
    </template>
  </view>
</template>

<script name="Calendar" lang="ts" setup>
import dayjs from 'dayjs'
import { calendar } from '@/apis/tianxing'

const dateDetail: any = ref(null)
let calendarVal = 0

const init = () => {
  calendarVal !== 0 &&
    calendar(dayjs(calendarVal).format('YYYY-MM-DD')).then(({ data }: any) => {
      data && (dateDetail.value = data)
    })
}

onLoad((ops: any) => {
  const current = ops?.current
  current && (calendarVal = +current)
  init()
})
</script>
