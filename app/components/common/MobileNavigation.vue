<template>
  <Sheet>
    <SheetTrigger as-child>
      <img
        :src="Menu"
        alt="menu"
        width="24px"
      >
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>
          Profile
        </SheetTitle>
      </SheetHeader>
      <div class="grid flex-1 auto-rows-min gap-6 px-4">
        <Accordion
          type="single"
          collapsible
          class="w-full"
          default-value="item-0"
        >
          <AccordionItem
            v-for="(menuItem, index) in topHeaderNavigationMenu"
            :key="index"
            :value="'item' + index"
          >
            <template v-if="menuItem.children">
              <AccordionTrigger>{{ menuItem.label }}</AccordionTrigger>
              <AccordionContent>
                <ul class="grid gap-2 w-[255px]">
                  <li
                    v-for="subMenuItem in menuItem.children"
                    :key="subMenuItem.title"
                    as-child
                  >
                    <a
                      :href="subMenuItem.link"
                    >
                      <div
                        class="flex gap-1 py-2"
                        :class="!subMenuItem.subtitle && 'items-center'"
                      >
                        <div>
                          <img
                            :src="subMenuItem.icon"
                            width="16px"
                          >
                        </div>
                        <div class="flex flex-col gap-2">
                          <p
                            class="text-sm text-grey-new-900 font-medium"
                            :class="subMenuItem.subtitle && 'leading-4'"
                          >
                            {{ subMenuItem.title }}
                          </p>
                          <p
                            v-if="subMenuItem.subtitle"
                            class="text-white-new-900 text-xs"
                          >
                            {{ subMenuItem.subtitle }}
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </AccordionContent>
            </template>
            <template v-else>
              <div class="py-4 text-left text-sm font-medium">
                <NuxtLink
                  :href="menuItem.href"
                >
                  {{ menuItem.label }}
                </NuxtLink>
              </div>
            </template>
          </AccordionItem>
        </Accordion>
      </div>
      <SheetFooter>
        <SheetClose as-child>
          <Button
            class="bg-sell hover:bg-sell/80"
          >
            Close
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Menu from '~/assets/icons/menu.svg'
import { topHeaderNavigationMenu } from '~/constants/top-header-navigation-menu'
</script>

<style scoped>

</style>
