<template>
  <Button
    size="lg"
    class="bg-white-new-200 justify-start px-10 h-[45px]"
  >
    <div class="flex items-center">
      <img
        :src="icon"
        :alt="alt"
        width="23px"
        height="28px"
        class="mr-4"
      >
      <span class="text-base font-semibold text-grey-new-900">{{ text }}</span>
    </div>
  </Button>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  alt: string
  text: string
}>()
</script>

<style scoped>

</style>
