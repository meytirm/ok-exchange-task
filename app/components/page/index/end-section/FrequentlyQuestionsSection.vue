<template>
  <div>
    <SectionTitle class="justify-start">
      Frequently Questions About Bitcoin
    </SectionTitle>
    <div>
      <Accordion
        type="single"
        collapsible
        class="w-full"
        default-value="item-0"
      >
        <AccordionItem
          v-for="(accordion, index) in accordionItems"
          :key="accordion.title"
          :value="'item-' + index"
          class="[[data-state=open]]:bg-[#F1F1F1] rounded-2xl p-6 border-0"
        >
          <AccordionTrigger class="flex justify-between items-center p-0">
            <span class="text-xl font-semibold leading-9 text-black">
              {{ accordion.title }}
            </span>
            <template #icon>
              <img
                class="[[data-state=open]>img]:hidden"
                :src="AddIcon"
              >
              <img
                class="[[data-state=closed]>img]:hidden"
                :src="RemoveIcon"
              >
            </template>
          </AccordionTrigger>
          <AccordionContent>
            <p class="text-base leading-7 text-gray-900">
              {{ accordion.content }}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue'
import AddIcon from '~/assets/icons/add.svg'
import RemoveIcon from '~/assets/icons/remove.svg'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { accordionItems } from '~/constants/accordion-items'
</script>

<style scoped>

</style>
