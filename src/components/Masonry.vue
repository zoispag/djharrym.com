<template>
  <div class="flex flex-wrap">
    <div v-for="url in photos">
      <img
        :src="url"
        alt="one more photo of how I rock"
        class="w-28 h-28 block rounded-sm object-cover"
      />
    </div>
  </div>
</template>

<script>
import images from '../assets/masonry/'

export default {
  name: 'Masonry',
  data() {
    return {
      photos: images
    }
  }
}
</script>