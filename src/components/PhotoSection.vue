<template>
  <section class="p-8 mx-auto w-full sm:w-3/4 section-bg mb-24">
    <div class="flex justify-center mb-8">
      <h2 class="text-yellow-300 text-2xl">{{ header }}</h2>
    </div>

    <div
      class="md:flex md:justify-between md:items-center"
      :class="{ 'flex-row-reverse' : isReverse }"
    >
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="w-full object-contain md:w-64 md:h-64 lg:w-96 lg:h-96"
      >
      <div
        class="mt-10 md:mt-0 md:pr-16"
        :class="{ 'md:px-4' : sidePadding }"
      >
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
    },
    sidePadding: {
      type: Boolean,
      default: true
    },
  }
}
</script>