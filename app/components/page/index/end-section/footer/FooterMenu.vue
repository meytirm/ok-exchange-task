<template>
  <div>
    <div class="lg:flex hidden justify-between  w-full">
      <div
        v-for="item in footerMenu"
        :key="item.title"
      >
        <h3 class="text-base font-semibold leading-7 text-black">
          {{ item.title }}
        </h3>
        <ul class="mt-2">
          <li
            v-for="childItem in item.children"
            :key="childItem.title"
          >
            <NuxtLink
              class="text-sm font-medium leading-6 text-black"
              :href="childItem.href"
            >{{ childItem.title }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <Accordion
      type="single"
      collapsible
      class="w-full lg:hidden block"
      default-value="item-0"
    >
      <AccordionItem
        v-for="(item, index) in footerMenu"
        :key="item.title"
        :value="'item-' + index"
        class="border-0 mb-3 py-1"
      >
        <AccordionTrigger class="flex justify-between items-center p-0">
          <h3 class="text-base font-semibold leading-7 text-black">
            {{ item.title }}
          </h3>
        </AccordionTrigger>
        <AccordionContent>
          <ul class="flex flex-col gap-2.5 mt-4 px-4">
            <li
              v-for="childItem in item.children"
              :key="childItem.title"
            >
              <NuxtLink
                class="text-sm leading-6 text-grey-new-900"
                :href="childItem.href"
              >{{ childItem.title }}</NuxtLink>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<script setup lang="ts">
import { footerMenu } from '~/constants/footer-menu'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'
</script>

<style scoped>

</style>
