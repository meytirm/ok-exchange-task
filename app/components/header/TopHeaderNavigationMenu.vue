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
          <NavigationMenuTrigger class="top-header-navigation-menu-trigger">
            {{ menuItem.label }}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink
              v-for="subMenuItem in menuItem.children"
              :key="subMenuItem.title"
            >
              <img :src="subMenuItem.icon">
              {{ subMenuItem.title }}
            </NavigationMenuLink>
          </NavigationMenuContent>
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
} from '@/components/ui/navigation-menu'
import { topHeaderNavigationMenu } from '~/constants/top-header-navigation-menu'
</script>

<style scoped>

</style>
