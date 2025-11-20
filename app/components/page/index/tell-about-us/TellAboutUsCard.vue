<template>
  <BaseCard class="flex flex-col gap-2 bg-white-new-100">
    <div class="flex items-center gap-2">
      <img
        :src="icon"
        alt="icon"
        class="w-[20px]"
      >
      <div class="text-sm leading-6 text-grey-new-900 font-medium">
        {{ title }}
      </div>
    </div>
    <div class="text-base leading-7 text-grey-new-100">
      {{ description }}
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '~/components/ui/card/BaseCard.vue'

defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<style scoped>

</style>
