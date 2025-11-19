<template>
  <Button
    size="lg"
    class="bg-white-new-200 justify-start lg:px-10 lg:h-[45px]"
  >
    <div class="flex items-center">
      <img
        :src="icon"
        :alt="alt"
        width="23px"
        height="28px"
        class="mr-4 lg:w-[23px] lg:h-[28px] w-[13px] h-[16px]"
      >
      <span class="lg:text-base text-sm font-semibold text-grey-new-900">{{ text }}</span>
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
