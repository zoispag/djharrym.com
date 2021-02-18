<template>
  <iframe
      width="100%"
      height="120"
      :src="iframeSource"
      frameborder="0"
  ></iframe>
</template>

<script>
export default {
  name: 'MixCloudShow',
  data() {
    return {
      iframeSource: ''
    }
  },
  props: ['feed'],
  mounted() {
    const urlsParams = new URLSearchParams({
      hide_cover: 1,
      light: 0,
      feed: this.feed
    })
    this.iframeSource = `https://www.mixcloud.com/widget/iframe/?${urlsParams}`
  },
}
</script>