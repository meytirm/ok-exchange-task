<template>
  <div class="w-full sm:w-auto flex flex-col items-center">
    <Carousel
      class="relative w-full"
      @init-api="setApi"
    >
      <CarouselContent>
        <CarouselItem
          v-for="(_, index) in 4"
          :key="index"
        >
          <TrustUsItem
            title="Trade Fast"
            :icon="FastIcon"
            description="Customer Support in 40 languages"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>

    <CarouselDots
      class="mt-4"
      :total="totalCount"
      :current="current"
    />
  </div>
</template>

<script setup lang="ts">
import type { CarouselApi } from '@/components/ui/carousel'
import { watchOnce } from '@vueuse/core'
import { ref } from 'vue'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import CarouselDots from '~/components/common/CarouselDots.vue'
import FastIcon from '~/assets/icons/fast.svg'
import TrustUsItem from '~/components/page/index/trust-us/TrustUsItem.vue'

const api = ref<CarouselApi>()
const totalCount = ref(0)
const current = ref(0)

function setApi(val: CarouselApi) {
  api.value = val
}

watchOnce(api, (api) => {
  if (!api)
    return

  totalCount.value = api.scrollSnapList().length
  current.value = api.selectedScrollSnap() + 1

  api.on('select', () => {
    current.value = api.selectedScrollSnap() + 1
  })
})
</script>
