<template>
  <div>
    <AppTabs
      v-model="tab"
      variant="outline"
      :tabs="tabs"
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
      <template #hotFutures>
        <table class="w-full border-separate border-spacing-x-0 border-spacing-y-4">
          <tbody>
            <tr
              v-for="(crypto, index) in cryptoPricesList.slice(0, 5)"
              :key="index"
            >
              <td>
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
              </td>
              <td>
                <span class="text-sm font-medium">
                  $ {{ crypto.price.toLocaleString() }}
                </span>
              </td>
              <td>
                <span
                  class="text-sm font-medium"
                  :class="Math.sign(crypto.profit) === 1 ? 'text-buy' : 'text-sell'"
                >
                  {{ Math.sign(crypto.profit) === 1 ? '+' : '' }}{{ crypto.profit }}%
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </template>

      <template #newlyAdded>
        <table class="w-full border-separate border-spacing-x-0 border-spacing-y-4">
          <tbody>
            <tr
              v-for="(crypto, index) in cryptoPricesList.slice(0, 5)"
              :key="index"
            >
              <td>
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
              </td>
              <td>
                <span class="text-sm font-medium">
                  $ {{ crypto.price.toLocaleString() }}
                </span>
              </td>
              <td>
                <span
                  class="text-sm font-medium"
                  :class="Math.sign(crypto.profit) === 1 ? 'text-buy' : 'text-sell'"
                >
                  {{ Math.sign(crypto.profit) === 1 ? '+' : '' }}{{ crypto.profit }}%
                </span>
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

const tab = ref('hotFutures')
const tabs = [
  {
    title: 'Hot Futures',
    value: 'hotFutures',
  },
  {
    title: 'Newly added',
    value: 'newlyAdded',
  },
]
</script>

<style scoped>

</style>
