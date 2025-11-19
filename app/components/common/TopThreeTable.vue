<template>
  <div class="flex flex-col gap-4 justify-between">
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
            class="lg:w-[32px] w-[16px]"
          >
          <div class="flex lg:flex-col flex-row gap-1">
            <span class="text-sm font-medium lg:block hidden">
              {{ crypto.name }}
            </span>
            <span class="text-sm font-medium lg:hidden block">
              {{ crypto.symbol }}
            </span>
            <span class="text-sm text-grey-new-0 lg:block hidden">
              {{ crypto.symbol }}
            </span>
            <span class="text-sm text-grey-new-0 lg:hidden block">
              {{ crypto.name }}
            </span>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-end">
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
  </div>
</template>

<script setup lang="ts">
import { cryptoIcons, cryptoPricesList } from '~/constants/crypto-prices-list'
import HotIcon from '~/assets/icons/hot.svg'
</script>

<style scoped>

</style>
