<template>
  <div>
    <NavigationMenu
      disable-hover-trigger
      disable-pointer-leave-close
    >
      <NavigationMenuList>
        <NavigationMenuItem
          v-for="menuItem in topHeaderNavigationMenu"
          :key="menuItem.label"
        >
          <template v-if="menuItem.children">
            <NavigationMenuTrigger class="top-header-navigation-menu-trigger">
              {{ menuItem.label }}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid gap-2 w-[255px]">
                <NavigationMenuLink
                  v-for="subMenuItem in menuItem.children"
                  :key="subMenuItem.title"
                  as-child
                >
                  <NavigationMenuItem
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
                  </NavigationMenuItem>
                </NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </template>
          <template v-else>
            <NavigationMenuLink
              class="hover:text-brand-foreground"
              as-child
            >
              <a :href="menuItem.href">{{ menuItem.label }}</a>
            </NavigationMenuLink>
          </template>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '~/components/ui/navigation-menu'
import { topHeaderNavigationMenu } from '~/constants/top-header-navigation-menu'
</script>

<style scoped>

</style>
