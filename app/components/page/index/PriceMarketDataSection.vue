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
      <div class="col-span-1">
        2
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue'
import CryptoListTab from '~/components/common/CryptoListTab.vue'
import SectionSubtitle from '~/components/common/SectionSubtitle.vue'
</script>

<style scoped>

</style>
