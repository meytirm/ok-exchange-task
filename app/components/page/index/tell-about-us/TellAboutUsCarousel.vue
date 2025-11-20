<template>
  <div class="w-full sm:w-auto flex flex-col items-center">
    <Carousel
      class="relative w-full"
      @init-api="setApi"
    >
      <CarouselContent>
        <CarouselItem
          v-for="(_, index) in 3"
          :key="index"
        >
          <TellAboutUsCard
            title="Tony Marshal"
            :icon="UserIcon"
            description="Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures."
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
import type { CarouselApi } from '~/components/ui/carousel'
import { watchOnce } from '@vueuse/core'
import { ref } from 'vue'
import { Carousel, CarouselContent, CarouselItem } from '~/components/ui/carousel'
import CarouselDots from '~/components/common/CarouselDots.vue'
import UserIcon from '~/assets/icons/user.svg'
import TellAboutUsCard from '~/components/page/index/tell-about-us/TellAboutUsCard.vue'

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
