<template>
  <div class="introduce-section">
    <div class="flex flex-col w-[65%] gap-6">
      <p class="introduce-text">
        Buy, Trade & Earn Bitcoin and 100+ Cryptocurrencies
      </p>
      <p class="introduce-sub-text">
        Secure platform to trade Bitcoin, Ethereum and altcoins with low fees
      </p>
      <div class="introduce-join">
        <form class="flex gap-2 items-center max-w-[70%]">
          <Input
            type="email"
            placeholder="Email"
          />
          <BrandButton type="submit">
            Join & Earn $25 Bonus
          </BrandButton>
        </form>
      </div>
    </div>
    <div class="w-[35%]">
      chart
    </div>
  </div>
</template>

<script setup lang="ts">
import { Input } from '~/components/ui/input'
import BrandButton from '~/components/common/BrandButton.vue'
</script>

<style scoped>

</style>
