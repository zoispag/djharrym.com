<template>
  <div class="rounded-md bg-red-50 p-4 w-3/4 mx-auto">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-red-800">
          Great! You have proven to be a bot! I've destroyed the form from the page, and acted like you successfully sent the form.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmailBot'
}
</script>

<style>

</style>
