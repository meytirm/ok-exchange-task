<template>
  <BaseCard class="bg-white-new-100 col-span-1">
    <div class="flex justify-center">
      <img
        class="w-36"
        :src="image"
        alt="card image"
      >
    </div>
    <div class="mt-2 flex flex-col gap-2">
      <div class="text-xl font-semibold leading-9 text-grey-new-900">
        {{ title }}
      </div>
      <div class="text-base leading-7 text-grey-new-100">
        {{ description }}
      </div>
    </div>
    <div class="mt-6 flex justify-between items-center">
      <div class="text-xs text-gray-900">
        {{ actionText }}
      </div>
      <div>
        <NuxtLink
          href="#"
          class="text-brand-foreground text-sm font-medium"
        >
          Trade
        </NuxtLink>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '~/components/ui/card/BaseCard.vue'

withDefaults(defineProps<{ actionText?: string, image: string, title: string, description: string }>(), {
  actionText: '',
})
</script>

<style scoped>

</style>
