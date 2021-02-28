<template>
  <section class="p-1 mx-auto w-full sm:w-3/4">
    <div
      class="md:flex md:flex-grow-0 md:justify-between md:items-center"
      :class="{ 'flex-row-reverse' : isReverse }"
    >
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="w-full object-contain md:w-32 md:h-32 lg:w-40 lg:h-40"
      >
      <div class="mt-10 md:mt-0 md:px-4 md:pr-16">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PhotoSection',
  props: {
    header: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      required: true,
    },
    isReverse: {
      type: Boolean,
      default: false
    }
  }
}
</script>