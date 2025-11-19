<template>
  <div>
    <AppTabs
      v-model="tab"
      variant="default"
      :tabs="tabs"
      class="lg:!bg-white-new-100 !bg-transparent"
    >
      <template #app-header-right>
        <NuxtLink
          href="#"
          class="flex items-center gap-2"
        >
          <span class="text-xs text-grey-new-0">View More</span>
          <img
            :src="ArrowRight"
            alt="arrow right"
          >
        </NuxtLink>
      </template>
      <template #topVolume>
        <table class="w-full border-separate border-spacing-x-0 border-spacing-y-4">
          <tbody>
            <tr
              v-for="(crypto, index) in cryptoPricesList"
              :key="index"
            >
              <td>
                <div class="flex lg:items-center items-start gap-2">
                  <img
                    :src="cryptoIcons[crypto.symbol]"
                    :alt="crypto.symbol"
                    class="lg:w-[32px] w-[16px]"
                  >
                  <div class="flex gap-2 lg:flex-row flex-col">
                    <span class="text-sm font-medium ">
                      {{ crypto.title }}
                    </span>
                    <span class="text-xs lg:hidden block text-grey-new-0">
                      {{ crypto.count }} M
                    </span>
                  </div>
                  <img
                    v-if="crypto.isHot"
                    class="lg:block hidden"
                    :src="HotIcon"
                  >
                </div>
              </td>
              <td>
                <div>
                  <span class="text-sm font-medium">
                    $ {{ crypto.price.toLocaleString() }}
                  </span>
                  <span
                    class="text-sm font-medium lg:hidden block"
                    :class="Math.sign(crypto.profit) === 1 ? 'text-buy' : 'text-sell'"
                  >
                    {{ Math.sign(crypto.profit) === 1 ? '+' : '' }}{{ crypto.profit }}%
                  </span>
                </div>
              </td>
              <td class="lg:table-cell hidden">
                <span class="text-sm font-medium">
                  {{ crypto.count }} M
                </span>
              </td>
              <td class="lg:table-cell hidden">
                <span
                  class="text-sm font-medium"
                  :class="Math.sign(crypto.profit) === 1 ? 'text-buy' : 'text-sell'"
                >
                  {{ Math.sign(crypto.profit) === 1 ? '+' : '' }}{{ crypto.profit }}%
                </span>
              </td>
              <td>
                <NuxtLink
                  href="#"
                  class="text-brand-foreground text-sm font-medium"
                >
                  Trade
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #hotTokes>
        <table class="w-full border-separate border-spacing-x-0 border-spacing-y-4">
          <tbody>
            <tr
              v-for="(crypto, index) in cryptoPricesList"
              :key="index"
            >
              <td>
                <div class="flex lg:items-center items-start gap-2">
                  <img
                    :src="cryptoIcons[crypto.symbol]"
                    :alt="crypto.symbol"
                    class="lg:w-[32px] w-[16px]"
                  >
                  <div class="flex gap-2 lg:flex-row flex-col">
                    <span class="text-sm font-medium ">
                      {{ crypto.title }}
                    </span>
                    <span class="text-xs lg:hidden block text-grey-new-0">
                      {{ crypto.count }} M
                    </span>
                  </div>
                  <img
                    v-if="crypto.isHot"
                    class="lg:block hidden"
                    :src="HotIcon"
                  >
                </div>
              </td>
              <td>
                <div>
                  <span class="text-sm font-medium">
                    $ {{ crypto.price.toLocaleString() }}
                  </span>
                  <span
                    class="text-sm font-medium lg:hidden block"
                    :class="Math.sign(crypto.profit) === 1 ? 'text-buy' : 'text-sell'"
                  >
                    {{ Math.sign(crypto.profit) === 1 ? '+' : '' }}{{ crypto.profit }}%
                  </span>
                </div>
              </td>
              <td class="lg:table-cell hidden">
                <span class="text-sm font-medium">
                  {{ crypto.count }} M
                </span>
              </td>
              <td class="lg:table-cell hidden">
                <span
                  class="text-sm font-medium"
                  :class="Math.sign(crypto.profit) === 1 ? 'text-buy' : 'text-sell'"
                >
                  {{ Math.sign(crypto.profit) === 1 ? '+' : '' }}{{ crypto.profit }}%
                </span>
              </td>
              <td>
                <NuxtLink
                  href="#"
                  class="text-brand-foreground text-sm font-medium"
                >
                  Trade
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </AppTabs>
  </div>
</template>

<script setup lang="ts">
import AppTabs from '~/components/common/AppTabs.vue'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import { cryptoPricesList, cryptoIcons } from '~/constants/crypto-prices-list'
import HotIcon from '@/assets/icons/hot.svg'

const tab = ref('topVolume')
const tabs = [
  {
    title: 'Top volume',
    value: 'topVolume',
  },
  {
    title: 'Hot Tokes',
    value: 'hotTokes',
  },
]
</script>

<style>

</style>
