<template>
  <section>
    <SectionTitle>
      Why Us
    </SectionTitle>
    <div class="why-us-items">
      <WhyUsItem
        v-for="(item, index) in whyUsItems"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :class="index % 2 === 0 ? 'items-start' : 'items-end'"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import WhyUsItem from '~/components/page/index/why-us/WhyUsItem.vue'
import { whyUsItems } from '~/constants/why-us-items'
import SectionTitle from '~/components/common/SectionTitle.vue'
</script>

<style scoped>

</style>
