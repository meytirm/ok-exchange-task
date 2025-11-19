<template>
  <section>
    <SectionTitle>
      Live Cryptocurrency Prices Market Data
    </SectionTitle>
    <SectionSubtitle>
      Top Gainers Today
    </SectionSubtitle>
    <div
      class="grid grid-cols-3 gap-5"
    >
      <div class="col-span-2">
        <CryptoListTab />
      </div>
      <div class="col-span-1 flex flex-col gap-5">
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
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue'
import CryptoListTab from '~/components/common/CryptoListTab.vue'
import SectionSubtitle from '~/components/common/SectionSubtitle.vue'
import TopThreeTable from '~/components/common/TopThreeTable.vue'
</script>

<style scoped>

</style>
