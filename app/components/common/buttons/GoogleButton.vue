<template>
  <Button
    class="bg-white-new-200 hover:bg-white-new-300/80 px-1.5"
    size="lg"
  >
    <img
      :src="Google"
      alt="google"
      width="28px"
    >
    <span class="text-sm font-semibold leading-6 lg:hidden block text-grey-new-900">
      Sign Up with Google
    </span>
  </Button>
</template>

<script setup lang="ts">
import Google from '~/assets/icons/google.svg'
</script>

<style scoped>

</style>
