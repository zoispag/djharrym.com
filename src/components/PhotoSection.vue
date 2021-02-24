<template>
  <section class="p-8 mx-auto w-full sm:w-2/3 section-bg mb-24">
    <div class="flex justify-center mb-8">
      <h2 class="text-yellow-300 text-2xl">{{ header }}</h2>
    </div>

    <div class="md:flex md:justify-between md:items-center">
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="w-full object-contain md:w-64 md:h-64 lg:w-96 lg:h-96"
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
  props: ['header', 'imgSrc', 'imgAlt']
}
</script>