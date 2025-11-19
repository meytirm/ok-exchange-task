<template>
  <div class="future-cards">
    <FutureCard
      :image="CardImage"
      action-text=""
      title="Futures Trading with Up to 100x Leverage"
      description="Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures."
    />
    <FutureCard
      :image="CardImage"
      action-text="30x max leverage"
      title="Futures Trading with Up to 100x Leverage"
      description="Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures."
    />
    <FutureCard
      :image="CardImage"
      action-text=""
      title="Futures Trading with Up to 100x Leverage"
      description="Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures."
    />
  </div>
</template>

<script setup lang="ts">
import CardImage from '@/assets/images/25x.png'
import FutureCard from '~/components/common/FutureCard.vue'
</script>

<style scoped>

</style>
