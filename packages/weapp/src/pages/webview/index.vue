<template>
  <web-view
    v-if="loadUrl"
    :webview-styles="webviewStyles"
    :src="loadUrl"
    @load="onLoaded"
    @error="onError"
  ></web-view>
</template>

<script lang="ts" setup>

// 此属性在app才生效
const webviewStyles = {
  progress: {
    color: '#FF3333'
  }
}

const loadUrl = ref('http://localhost:5173/#/')

const onLoaded = () => {
  uni.hideLoading()
}

const onError = () => {
  uni.hideLoading()
}

onLoad((ops) => {
  const { url, isEncode } = ops || {}
  if (!url) {
    let timer = setTimeout(() => {
      uni.navigateBack()
      clearTimeout(timer)
    }, 500)
    return false
  }
  loadUrl.value = isEncode === '1' ? decodeURIComponent(url) : url
  uni.showLoading({
    title: '加载中...'
  })
})
</script>
