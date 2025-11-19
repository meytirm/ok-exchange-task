<template>
  <div class="flex flex-col justify-between">
    <div
      v-for="(crypto, index) in cryptoPricesList.slice(0, 3)"
      :key="index"
      class="flex justify-between items-center"
    >
      <div>
        <div class="flex items-center gap-2">
          <img
            :src="cryptoIcons[crypto.symbol]"
            :alt="crypto.symbol"
          >
          <div class="flex gap-2">
            <span class="text-sm font-medium">
              {{ crypto.symbol }}

            </span>
            <span class="text-sm text-grey-new-0">
              {{ crypto.name }}
            </span>
          </div>
          <img
            v-if="crypto.isHot"
            :src="HotIcon"
          >
        </div>
      </div>
      <div>
        <span class="text-sm font-medium">
          $ {{ crypto.price.toLocaleString() }}
        </span>
      </div>
      <div>
        <span
          class="text-sm font-medium"
          :class="Math.sign(crypto.profit) === 1 ? 'text-buy' : 'text-sell'"
        >
          {{ Math.sign(crypto.profit) === 1 ? '+' : '' }}{{ crypto.profit }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cryptoIcons, cryptoPricesList } from '~/constants/crypto-prices-list'
import HotIcon from '~/assets/icons/hot.svg'
</script>

<style scoped>

</style>
