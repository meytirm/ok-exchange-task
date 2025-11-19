<template>
  <section>
    <div class="lg:block hidden">
      <SectionTitle>
        Live Cryptocurrency Prices Market Data
      </SectionTitle>
      <SectionSubtitle>
        Top Gainers Today
      </SectionSubtitle>
    </div>
    <div
      class="grid grid-cols-3 gap-5"
    >
      <div class="lg:col-span-2 col-span-3">
        <CryptoListTab />
      </div>
      <div class="col-span-1 flex-col gap-5 lg:flex hidden">
        <div class="grow bg-white-new-100 rounded-2xl p-4 flex flex-col">
          <div class="text-xl leading-9 font-semibold text-grey-new-900">
            Top 3 Losers
          </div>
          <hr class="mb-4 border-white-new-300">
          <TopThreeTable class="grow" />
        </div>
        <div class="grow bg-white-new-100 rounded-2xl p-4 flex flex-col">
          <div class="text-xl leading-9 font-semibold text-grey-new-900">
            Top 3 Gainers
          </div>
          <hr class="mb-4 border-white-new-300">
          <TopThreeTable class="grow" />
        </div>
      </div>
      <div class="lg:hidden block col-span-3">
        <AppTabs
          v-model="tab"
          class="bg-auto !bg-transparent"
          :tabs="tabs"
        >
          <template #top3Losers>
            <TopThreeTable />
          </template>
          <template #top3Gainers>
            <TopThreeTable />
          </template>
        </AppTabs>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue'
import CryptoListTab from '~/components/common/CryptoListTab.vue'
import SectionSubtitle from '~/components/common/SectionSubtitle.vue'
import TopThreeTable from '~/components/common/TopThreeTable.vue'
import AppTabs from '~/components/common/AppTabs.vue'

const tab = ref('top3Losers')
const tabs = [
  {
    title: 'Top 3 Losers',
    value: 'top3Losers',
  },
  {
    title: 'Top 3 Gainers',
    value: 'top3Gainers',
  },
]
</script>

<style scoped>

</style>
